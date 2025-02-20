import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {PromptingService} from '../services/prompting.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  showModels = true;

  constructor(public router: Router, public promptingService: PromptingService) {
  }

  toggleModels() {
    this.showModels = !this.showModels;
    this.promptingService.setShowModels(this.showModels);
  }

  navigateToPrototype() {
    this.router.navigate(['/prompting']);
  }
}
