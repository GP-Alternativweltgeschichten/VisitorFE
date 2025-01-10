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

  drawing = false;
  erasing = false;
  ctx: CanvasRenderingContext2D | null = null;
  lineWidth = 8;

  @ViewChild('canvas', { static: false }) canvasRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('container', { static: false }) containerRef!: ElementRef<HTMLDivElement>;

  constructor(public promptingService: PromptingService) {}

  updatePrompt(inputField: HTMLInputElement): void {
    if (this.inputText.trim()) {
      this.userPrompt = this.inputText.trim();
      this.inputText = '';
      inputField.value = '';
      console.log('Prompt Updated:', this.userPrompt);
      this.promptingService.sendText(this.userPrompt)
    }
  }

  onInputChange(value: string): void {
    this.inputText = value;
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
    const { offsetX, offsetY } = event;
    this.ctx.moveTo(offsetX, offsetY);
    this.ctx.strokeStyle = this.erasing ? 'rgba(0,0,0,0)' : 'rgba(0, 0, 0, 0.4)';
  }

  draw(event: MouseEvent): void {
    if (!this.drawing || !this.ctx) return;
    const { offsetX, offsetY } = event;

    if (this.erasing) {
      this.ctx.clearRect(offsetX - this.lineWidth / 2, offsetY - this.lineWidth / 2, this.lineWidth, this.lineWidth); // Clear the drawn area to "erase"
    } else {
      this.ctx.lineTo(offsetX, offsetY);
      this.ctx.stroke();
    }
  }

  stopDrawing(): void {
    if (!this.ctx) return;

    this.drawing = false;
    this.ctx.closePath();
  }

  changeLineWidth(width: number): void {
    this.lineWidth = width;
    if (this.ctx) this.ctx.lineWidth = width;
  }

  enableEraser(): void {
    this.erasing = true;
  }

  enableDrawing(): void {
    this.erasing = false;
  }

  resetCanvas(): void {
    if (!this.ctx || !this.canvasRef) return;

    const canvas = this.canvasRef.nativeElement;
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}
