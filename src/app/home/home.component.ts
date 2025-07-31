import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PromptingService} from '../services/prompting.service';
import {RadioButtonClickEvent} from 'primeng/radiobutton';

type StartupInputModel= "Prompting" | "AI Chat";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  startupInputModel:StartupInputModel = "AI Chat";

  inputModelOptions = [
    {value: 'AI Chat' },
    {value: 'Prompting'}
  ];

  showModels: boolean = true;
  modelOptions = [
    { label: 'Ja', value: true },
    { label: 'Nein', value: false }
  ];

  constructor(public router: Router, public promptingService: PromptingService) {
  }

  ngOnInit() {
    this.showModels = this.promptingService.getShowModels();
    // should be set in Ai chat component
    this.startupInputModel = "AI Chat";
  }
  // toggle für die InputModel Auswahl zwischen Ai Chat oder prompting
  toggleInputModel(event: RadioButtonClickEvent) {
    this.startupInputModel = event.value;
    console.log(this.startupInputModel);
  }

  toggleModels(event: RadioButtonClickEvent) {
    this.showModels = event.value;
    console.log(this.showModels)
    this.promptingService.setShowModels(this.showModels);
  }

  navigateToPrototype() {
    this.router.navigate([this.startupInputModel === 'Prompting' ? '/prompting' : '/ai-chat'])
  }

}
