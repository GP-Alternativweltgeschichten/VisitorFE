import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PromptingService} from '../services/prompting.service';
import {RadioButtonClickEvent} from 'primeng/radiobutton';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  showModels: boolean = true;
  modelOptions = [
    { label: 'Ja', value: true },
    { label: 'Nein', value: false }
  ];

  constructor(public router: Router, public promptingService: PromptingService) {
  }

  ngOnInit() {
    this.showModels = this.promptingService.getShowModels();
  }

  toggleModels(event: RadioButtonClickEvent) {
    this.showModels = event.value;
    console.log(this.showModels)
    this.promptingService.setShowModels(this.showModels);
  }

  navigateToPrototype() {
    this.router.navigate(['/prompting']);
  }
}
