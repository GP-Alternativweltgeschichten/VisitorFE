import {Component, ElementRef, ViewChild, AfterViewInit} from '@angular/core';
import {PromptingService} from '../../services/prompting.service';

@Component({
  selector: 'app-prompting',
  standalone: false,
  templateUrl: './prompting.component.html',
  styleUrl: './prompting.component.css'
})
export class PromptingComponent implements AfterViewInit {
  userPrompt: string = '';
  inputText: string = '';

  shownMap: string = "assets/img/olpe.jpg"

  ctx: CanvasRenderingContext2D | null = null;
  selectedTool: 'draw' | 'eraser' = 'draw';
  drawing = false;
  erasing = false;
  lineWidth = 10;
  lastX: number | null = null;
  lastY: number | null = null;


  @ViewChild('canvas', {static: false}) canvasRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('container', {static: false}) containerRef!: ElementRef<HTMLDivElement>;
  @ViewChild('img', { static: false }) imgElement: ElementRef<HTMLImageElement> | undefined;

  constructor(public promptingService: PromptingService) {
  }

  async updatePrompt(inputField: HTMLInputElement): Promise<void> {
    if (this.inputText.trim()) {
      this.userPrompt = this.inputText.trim();
      this.inputText = '';
      inputField.value = '';

      console.log('Prompt Updated:', this.userPrompt);
      if (this.imgElement && this.imgElement.nativeElement) {
        const img = this.imgElement.nativeElement;
        const image = this.getImageAsDataURL(img);
        const canvasURL = this.getCanvasAsDataURL()
        this.promptingService.sendTextAndImageAndMask(this.userPrompt, image, canvasURL).subscribe((response: any) => {
          const blob = new Blob([response], {type: 'image/png'});
          this.shownMap = URL.createObjectURL(blob);
        });
      }
    }
  }

  onInputChange(value: string): void {
    this.inputText = value;
  }

  /*****Convert Image/Canvas to ByteArray*****/
  getCanvasAsDataURL(): string {
    if (!this.canvasRef) return String();

    const canvas = this.canvasRef.nativeElement;
    const dataUrl = canvas.toDataURL('image/png'); // Get the base64 string
    const binaryString = atob(dataUrl.split(',')[1]); // Decode the base64 string
    const len = binaryString.length;
    const bytes = new Uint8Array(len);

    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return dataUrl;
  }

  getImageAsDataURL(img: HTMLImageElement): string {
    const canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext('2d');
    // @ts-ignore
    ctx.drawImage(img, 0, 0);
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

    this.drawing = true;
    this.ctx.beginPath();
    const {offsetX, offsetY} = event;
    this.ctx.moveTo(offsetX, offsetY);
  }

  draw(event: MouseEvent): void {
    if (!this.drawing || !this.ctx) return;
    const {offsetX, offsetY} = event;

    if (this.erasing) {
      //Clear the drawn area (smoothly)
      this.ctx.globalCompositeOperation = 'destination-out'; // Erase mode

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
    } else {
      this.ctx.globalCompositeOperation = 'source-over';
      this.ctx.lineTo(offsetX, offsetY);
      this.ctx.stroke();
    }

    this.lastX = offsetX;
    this.lastY = offsetY;
  }

  stopDrawing(): void {
    if (!this.ctx) return;

    this.drawing = false;
    this.ctx.closePath();
    this.lastX = null;
    this.lastY = null;
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

  resetCanvas(): void {
    if (!this.ctx || !this.canvasRef) return;

    const canvas = this.canvasRef.nativeElement;
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}
