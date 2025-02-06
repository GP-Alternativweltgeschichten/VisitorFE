import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.css'
})
export class ProgressComponent implements OnChanges {
  @Input() progress: boolean = false;

  interval: any;
  progressValue: number = 0;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['progress'] && this.progress) {
      this.resetProgress();
      this.increaseProgress();
    }
  }

  resetProgress(): void {
    this.progressValue = 0;
    if (this.interval) {
      clearInterval(this.interval); // Altes Intervall stoppen
    }
  }

  increaseProgress(): void {
    this.interval = setInterval(() => {
      const increment = Math.floor(Math.random() * 10) + 4; // Zufällige Schritte von 1-5%
      this.progressValue = Math.min(this.progressValue + increment, 99);
      if (this.progressValue >= 99) {
        clearInterval(this.interval);
      }
    }, 1000);
  }

}
