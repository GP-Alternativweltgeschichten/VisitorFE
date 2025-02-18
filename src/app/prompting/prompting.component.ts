import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {PromptingService} from '../services/prompting.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-prompting',
  standalone: false,
  templateUrl: './prompting.component.html',
  styleUrl: './prompting.component.css'
})
export class PromptingComponent implements  AfterViewInit {
  userPrompt: string = '';
  inputText: string = '';
  shownMap: string = "assets/img/olpe_140x140.png"
  realism: number = 0;

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


  @ViewChild('canvas', {static: false}) canvasRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('container', {static: false}) containerRef!: ElementRef<HTMLDivElement>;
  @ViewChild('img', { static: false }) imgElement: ElementRef<HTMLImageElement> | undefined;

  constructor(
    public promptingService: PromptingService,
    private translate: TranslateService) {
    // Default language
    this.translate.setDefaultLang('de');
  }

  switchLanguage(language: string): void {
    this.translate.use(language);
  }

  toggleRealism(): void {
    this.realism = this.realism === 0 ? 10 : 0;
  }

  async updatePrompt(inputField: HTMLInputElement): Promise<void> {
    this.progress = true;
    if (this.inputText.trim()) {
      this.userPrompt = this.inputText.trim();

      console.log('Prompt Updated:', this.userPrompt);
      if (this.imgElement && this.imgElement.nativeElement) {
        const img = this.imgElement.nativeElement;
        const image = this.getImageAsDataURL(img);
        const canvasURL = this.getCanvasAsDataURL()

        this.promptingService.sendTextAndImageAndMaskAndRealism(this.userPrompt, image, canvasURL, this.realism).subscribe((response: any) => {
          const blob = new Blob([response], {type: 'image/png'});
          this.shownMap = URL.createObjectURL(blob);
          this.resetCanvas();
          this.progress = false;
          this.inputText = '';
          inputField.value = '';
        });
      }
    }
  }

  onInputChange(value: string): void {
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

  /*****Convert Image/Canvas to ByteArray*****/
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

    const widthRatio = maxWidth / img.naturalWidth;
    const heightRatio = maxHeight / img.naturalHeight;
    const scaleFactor = Math.min(widthRatio, heightRatio);
    const targetWidth = Math.round(img.naturalWidth * scaleFactor);
    const targetHeight = Math.round(img.naturalHeight * scaleFactor);

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
    if (this.selectedTool === 'closed') {
      this.closedPoints = [{ x: event.offsetX, y: event.offsetY }];
    }
    this.updateGeneratePermitted();
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
      // Draw a line segment from the last point to the current point
      if (this.closedPoints.length > 1) {
        const lastPoint = this.closedPoints[this.closedPoints.length - 2];
        this.ctx.beginPath();
        this.ctx.moveTo(lastPoint.x, lastPoint.y);
        this.ctx.quadraticCurveTo(lastPoint.x, lastPoint.y, offsetX, offsetY);
        this.ctx.stroke();
      }
      // Check if the current point is close to the starting point
      const tolerance = 20;
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
        this.drawing = false;
        this.closedPoints = [];
        this.updateGeneratePermitted();
        return;
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

    if (this.selectedTool !== 'closed') {
      this.drawing = false;
      this.ctx.closePath();
      this.lastX = null;
      this.lastY = null;
      this.updateGeneratePermitted();
    }
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

  handleKeyDown(event: KeyboardEvent, inputField: HTMLInputElement): void {
    if (event.key === 'Enter' && !this.generatePermitted) {
      event.preventDefault();
    } else if (event.key === 'Enter') {
      this.updatePrompt(inputField);
    }
  }

  resetPrompt(inputField: HTMLInputElement): void {
    this.userPrompt = '';
    this.inputText = '';
    inputField.value = '';
    //this.shownMap = "assets/img/olpe_140x140.png";
    this.resetCanvas();
    this.enableDrawing();
    this.updateGeneratePermitted();
    this.reload = !this.reload;
    this.realism = 0;
  }
}
