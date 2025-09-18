import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {PromptingService} from '../services/prompting.service';
import {TranslateService} from '@ngx-translate/core';
import {RadioButtonClickEvent} from 'primeng/radiobutton';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import {AutoComplete, AutoCompleteCompleteEvent} from 'primeng/autocomplete';
import {ChatMessage} from './ai-Chat-interfaces';
import {animate, style, transition, trigger} from '@angular/animations';
import {AiChatService} from '../services/ai-chat.service';
import {ScrollPanel} from 'primeng/scrollpanel';

@Component({
  selector: 'app-ai-chat',
  templateUrl: './ai-chat.component.html',
  styleUrl: './ai-chat.component.css',
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('250ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ],
})
export class AiChatComponent implements  OnInit, AfterViewInit{
  chatMessageList: ChatMessage[] = [];
  openingMessage: string = "Hallo! Ich bin Olpi, dein KI-gestützter Assistent. Markiere etwas auf der Karte und gib mir einen Hinweis, was du ändern möchtest. Ich werde mein Bestes tun, dir zu helfen!";
  promptList: { summary: string; prompt: string }[]=[];
  inputText: string = '';
  conversationID: number = 0;
  selectedUserPrompt: string = '';
  shownMap: string = "assets/img/olpe_140x140.png"
  selectedModel: number = 1; // Default for Olpe-AI
  modelOptions = [
    { label: 'Olpe AI', value: 0 },
    { label: 'Dall-E', value: 1 }
  ];
  showModelSelector: boolean | undefined
  guidanceScale: number = 7.5;
  areaChanged: boolean = false;
  ctx: CanvasRenderingContext2D | null = null;
  selectedTool: 'draw' | 'closed' | 'eraser' = 'draw';
  drawing = false;
  erasing = false;
  lineWidth = 10;
  lastX: number | null = null;
  lastY: number | null = null;
  closedPoints: { x: number, y: number }[] = [];
  reload: boolean = false;
  progress: boolean = false;
  generateEnabled: boolean = false;
  generatePermitted: boolean = false;

  predefinedPrompts: any[] = [
    'Fluss',
    'Wasser',
    'Kirche',
    'Parkplatz',
    'Haus',
    'Häuser'
  ]
  filteredPrompts: any[] = []


  @ViewChild('canvas', {static: false}) canvasRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('container', {static: false}) containerRef!: ElementRef<HTMLDivElement>;
  @ViewChild('img', { static: false }) imgElement: ElementRef<HTMLImageElement> | undefined;

  constructor(
    public promptingService: PromptingService,
    private messageService: MessageService,
    private aiChatService: AiChatService,
    private translate: TranslateService) {
    // Default language
    this.translate.setDefaultLang('de');
  }

  ngOnInit() {
    this.promptingService.getAIModel().subscribe({
        next: (model) => {
          this.selectedModel = model
        }
      }
    )

    this.chatMessageList.push({type: 'ChatBot', content: this.openingMessage,  timestamp: new Date().toISOString()});
    this.showModelSelector = this.promptingService.getShowModels()
  }



  showSuccess() {
    this.messageService.add({
      severity: 'success',
      summary: 'Erfolg',
      detail: 'Die Aktion war erfolgreich!',
    });
  }

  showError() {
    this.messageService.add({
      severity: 'error',
      summary: 'Fehler',
      detail: 'Da ist etwas schiefgelaufen.',
    });
  }
  promptDepricated() {
    this.messageService.add({
      severity: 'error',
      summary: 'Veralteter Prompt',
      detail: 'Der ausgewählte Prompt war für die vorherige Auswahl auf der Karte. Wähle einen anderen oder erstelle einen neuen.',
    });
  }

  /**********New Features**********/

  sendChatMessage() {
    if(this.inputText.trim()) {
      this.chatMessageList.push({type: 'User', content: this.inputText.trim(),  timestamp: new Date().toISOString()});
      this.aiChatService.sendMessage(this.inputText.trim(),this.conversationID).subscribe({
        next: (response) => {
          this.showChatResponse(response)
console.log(response)
        }
      }
      );
      this.inputText = '';
    }
  }

  showChatResponse(response: string){
    let startWord = "Zusammenfassung=";
    let endWord = "Prompt=";
    if(response.includes(startWord, ) && response.includes(endWord)){
      let startIndex = response.indexOf(startWord);
      let endIndex = response.indexOf(endWord);
      startIndex += startWord.length
      let zusammenfassung = response.substring(startIndex, endIndex).trim();
      let prompt = response.substring(endIndex + endWord.length).trim();

      console.log(zusammenfassung)
      console.log(prompt)
      this.promptList.push({summary: zusammenfassung, prompt: prompt })
      this.chatMessageList.push({type: 'Prompt', content: zusammenfassung, promptText:prompt, activated:true, timestamp: new Date().toISOString()});
    }else {
      this.chatMessageList.push({type: 'ChatBot', content: response, timestamp: new Date().toISOString()});
    }

  }

  updatedMarkedArea(){

    if (this.imgElement && this.imgElement.nativeElement) {
      const img = this.imgElement.nativeElement;
      const image = this.getImageAsDataURL(img);
      const canvasURL = this.getCanvasAsDataURL()
      this.disablePrompts()
      this.areaChanged=false
      this.aiChatService.sendImage(image, canvasURL,this.conversationID).subscribe({
        next: (response) => {
          this.showChatResponse(response)
        }
      });

    }
  }


  newChat(){
      this.conversationID ++;
  }


  /**********Old Features**********/
  setAIModel(event: RadioButtonClickEvent): void {
    this.selectedModel = event.value;
    this.promptingService.saveAIModel(this.selectedModel)
  }

  switchLanguage(language: string): void {
    this.translate.use(language);
  }


  selectUserPrompt(msg:ChatMessage){
    this.areaChanged = false;
    if(msg.promptText && msg.activated===true) {
      this.selectedUserPrompt = msg.promptText
      this.updatePrompt()
    }
    else{this.showError()}
  }


  async updatePrompt(): Promise<void> {
    this.progress = true;
      if (this.imgElement && this.imgElement.nativeElement) {
        const img = this.imgElement.nativeElement;
        const image = this.getImageAsDataURL(img);
        const canvasURL = this.getCanvasAsDataURL()

        this.promptingService.sendInpaintInformation(this.selectedUserPrompt, image, canvasURL, this.selectedModel, this.guidanceScale).subscribe((response: any) => {
          this.disablePrompts()
          const blob = new Blob([response], {type: 'image/png'});
          this.shownMap = URL.createObjectURL(blob);
          this.resetCanvas();
          this.progress = false;
          this.inputText = '';
        });
      }

  }

  disablePrompts(){
    this.chatMessageList.forEach(msg=>{
      if(msg.type==='Prompt'){
        msg.activated=false
      }
    })
  }

  onInputChange(value: string): void {
    console.log(value)
    this.inputText = value;
    this.updateGeneratePermitted();
  }

  isCanvasEmpty(): boolean {
    if (!this.canvasRef) return true;

    const canvas = this.canvasRef.nativeElement;
    const context = canvas.getContext('2d');

    if (!context) return true;

    const imageData = context.getImageData(0, 0, canvas.width, canvas.height).data;
    return imageData.every((value: number, index: number) => index % 4 === 3 ? value === 0 : true);
  }

  isInputEmpty(): boolean {
    return this.inputText.trim() === '';
  }

  updateGeneratePermitted(): void {
    this.generatePermitted = !this.isCanvasEmpty() && !this.isInputEmpty();
  }


  /*****Convert Image/Canvas*****/
  getCanvasAsDataURL(): string {
    if (!this.canvasRef) return String();

    const canvas = this.canvasRef.nativeElement;
    const context = canvas.getContext('2d');

    // Prüfen, ob das Canvas leer ist
    // @ts-ignore
    const imageData = context.getImageData(0, 0, canvas.width, canvas.height).data;
    const isEmpty = imageData.every((value: number, index: number) => index % 4 === 3 ? value === 0 : true);

    if (isEmpty) {
      console.log('Canvas is empty.');
      return '';
    }

    // Get the base64 string
    return canvas.toDataURL('image/png');
  }

  getImageAsDataURL(img: HTMLImageElement): string {
    const maxWidth = img.clientWidth;
    const maxHeight = img.clientHeight;

    const canvas = document.createElement('canvas');
    canvas.width = maxWidth;
    canvas.height = maxHeight;

    const ctx = canvas.getContext('2d');
    // @ts-ignore
    if (ctx) ctx.drawImage(img, 0, 0, maxWidth, maxHeight);
    return canvas.toDataURL('image/png');
  }

  /**********DRAW FEATURE**********/
  ngAfterViewInit(): void {
    const canvas = this.canvasRef.nativeElement;
    const container = this.containerRef.nativeElement;

    // Set canvas dimensions to match the container
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;

    this.ctx = canvas.getContext('2d');

    if (this.ctx) {
      this.ctx.lineWidth = this.lineWidth;
      this.ctx.lineCap = 'round';
      this.ctx.strokeStyle = 'red'; //black
      this.ctx.globalCompositeOperation = 'source-over';

      // Enable drawing
      canvas.addEventListener('mousedown', (e) => this.startDrawing(e));
      canvas.addEventListener('mousemove', (e) => this.draw(e));
      canvas.addEventListener('mouseup', () => this.stopDrawing());
      canvas.addEventListener('mouseleave', () => this.stopDrawing());
    }
  }

  startDrawing(event: MouseEvent): void {
    if (!this.ctx) return;
    if (!(event.buttons & 1)) return;

    this.drawing = true;
    this.lastX = event.offsetX;
    this.lastY = event.offsetY;
    this.updateGeneratePermitted();
    this.areaChanged = true;
    this.disablePrompts()

  }

  draw(event: MouseEvent): void {
    if (!this.drawing || !this.ctx) return;
    if (!(event.buttons & 1)) return;
    const {offsetX, offsetY} = event;

    if (this.erasing) {
      //Eraser mode – using circles for smooth erasing
      this.ctx.globalCompositeOperation = 'destination-out';

      if (this.lastX !== null && this.lastY !== null) {
        const distance = Math.hypot(offsetX - this.lastX, offsetY - this.lastY);
        const steps = Math.ceil(distance / (this.lineWidth / 2));

        for (let i = 1; i <= steps; i++) {
          const x = this.lastX + (offsetX - this.lastX) * (i / steps);
          const y = this.lastY + (offsetY - this.lastY) * (i / steps);
          this.ctx.beginPath();
          this.ctx.arc(x, y, this.lineWidth / 2, 0, Math.PI * 2);
          this.ctx.fill();
        }
      }
    } else if (this.selectedTool === 'closed') { // Closed shape mode
      // Add current point to the closedPoints array
      this.closedPoints.push({ x: offsetX, y: offsetY });
      this.ctx.globalCompositeOperation = 'source-over';
      this.ctx.beginPath();

      if (this.lastX !== null && this.lastY !== null) {
        this.ctx.moveTo(this.lastX, this.lastY);
        this.ctx.quadraticCurveTo(this.lastX, this.lastY, offsetX, offsetY);
      } else {
        this.ctx.moveTo(offsetX, offsetY);
      }
      this.ctx.stroke();

      // Check if the current point is close to the starting point
      const tolerance = 15;
      const firstPoint = this.closedPoints[0];
      const dx = offsetX - firstPoint.x;
      const dy = offsetY - firstPoint.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < tolerance && this.closedPoints.length > 2) {
        // Close the shape and fill it
        this.ctx.beginPath();
        this.ctx.moveTo(firstPoint.x, firstPoint.y);
        for (const pt of this.closedPoints) {
          this.ctx.lineTo(pt.x, pt.y);
        }
        this.ctx.closePath();
        this.ctx.fillStyle = 'red';
        this.ctx.fill();
      }
    } else {
      // Normal drawing mode (using quadratic curves for smooth lines)
      this.ctx.globalCompositeOperation = 'source-over';
      this.ctx.beginPath();

      if (this.lastX !== null && this.lastY !== null) {
        this.ctx.moveTo(this.lastX, this.lastY);
        this.ctx.quadraticCurveTo(this.lastX, this.lastY, offsetX, offsetY);
      } else {
        this.ctx.moveTo(offsetX, offsetY);
      }

      this.ctx.stroke();
    }

    this.lastX = offsetX;
    this.lastY = offsetY;
    this.updateGeneratePermitted();
  }

  stopDrawing(): void {
    if (!this.ctx) return;

    this.drawing = false;
    this.ctx.closePath();
    this.closedPoints = [];
    this.lastX = null;
    this.lastY = null;
    this.updateGeneratePermitted();
  }

  changeLineWidth(event: Event): void {
    const target = event.target as HTMLInputElement;
    const newWidth = parseInt(target.value, 10);

    this.lineWidth = newWidth;
    if (this.ctx) this.ctx.lineWidth = newWidth;
  }

  enableEraser(): void {
    this.erasing = true;
    this.selectedTool = 'eraser';
  }

  enableDrawing(): void {
    this.erasing = false;
    this.selectedTool = 'draw';
  }

  enableClosedShape(): void {
    this.erasing = false;
    this.selectedTool = 'closed';
  }
  /**************************************/

  resetCanvas(): void {
    if (!this.ctx || !this.canvasRef) return;

    const canvas = this.canvasRef.nativeElement;
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.updateGeneratePermitted();
  }

  showMap(map: any): void {
    this.shownMap = map;
    this.imgElement?.nativeElement.setAttribute('src', map);
  }

  setGeneratedMapEditable(isEditable: boolean): void {
    this.generateEnabled = isEditable;
  }
/**
  handleKeyDown(event: KeyboardEvent, inputField: any): void {
    if (event.key === 'Enter' && !this.generatePermitted) {
      event.preventDefault();
    } else if (event.key === 'Enter') {
      this.updatePrompt(inputField);
    }
  }
**/
  resetPrompt(inputField: AutoComplete): void {
    this.selectedUserPrompt = '';
    this.inputText = '';
    inputField.value = '';
    //this.shownMap = "assets/img/olpe_140x140.png";
    this.resetCanvas();
    this.enableDrawing();
    this.updateGeneratePermitted();
    this.reload = !this.reload;
    //this.selectedModel = 0;
    this.lineWidth = 10;
    this.guidanceScale = 7.5;
  }

  filterPrompts(event: AutoCompleteCompleteEvent){
    this.filteredPrompts = this.predefinedPrompts
      .filter(prompt => prompt.toLowerCase().includes(event.query.toLowerCase()));
    /*let filtered = []
    for (let i = 0; i < (this.predefinedPrompts as any[]).length; i++) {
      let prompt = (this.predefinedPrompts as any[])[i]
      if (this.predefinedPrompts.filter(prompt => prompt.toLowerCase().includes(event.query.toLowerCase()))) {
        filtered.push(prompt)
      }
    }
    this.filteredPrompts = filtered*/
  }



}
