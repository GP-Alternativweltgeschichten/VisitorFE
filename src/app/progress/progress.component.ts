import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.css'
})
export class ProgressComponent implements OnChanges {
  @Input() progress: boolean = false;
  @Input() model: number = 0;

  interval: any;
  progressValue: number = 0;
  duration: number = 1000;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['progress'] && this.progress) {
      this.resetProgress();
      this.increaseProgress();
    }
    if (changes['model'] && this.model) {
      switch (this.model) {
        case 0:
          this.duration = 1000;
          return;
        case 1:
          this.duration = 2000;
          return;
        default:
          this.duration = 1000;
      }
    }
  }

  resetProgress(): void {
    this.progressValue = 0;
    if (this.interval) {
      clearInterval(this.interval); // Altes Intervall stoppen
    }
  }

  increaseProgress(): void {
    console.log(this.duration)
    console.log(this.progressValue)
    this.interval = setInterval(() => {
      const increment = Math.floor(Math.random() * 10) + 4; // Zufällige Schritte von 1-5%
      this.progressValue = Math.min(this.progressValue + increment, 99);
      if (this.progressValue >= 99) {
        clearInterval(this.interval);
      }
    }, this.duration);
  }

}
