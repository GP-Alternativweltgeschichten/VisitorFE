import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.css'
})
export class ProgressComponent implements OnInit{
  @Input() progress: boolean = false;

  progressValue: number = 0;

  ngOnInit(): void {
    this.increaseProgress();
  }

  increaseProgress(): void {
    const interval = setInterval(() => {
      const increment = Math.floor(Math.random() * 5) + 1; // Zufällige Schritte von 1-5%
      this.progressValue = Math.min(this.progressValue + increment, 99);
      if (this.progressValue >= 99) {
        clearInterval(interval);
      }
    }, 1000);
  }

}
