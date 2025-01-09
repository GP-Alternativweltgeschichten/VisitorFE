import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {ScenarioService} from '../../services/scenario.service';
import {Scenario} from '../../services/Scenario';

@Component({
  selector: 'app-scenarios',
  standalone: false,
  templateUrl: './scenarios.component.html',
  styleUrl: './scenarios.component.css'
})
export class ScenariosComponent implements OnInit {
  scenarios: Scenario[] = [];

  constructor(private translate: TranslateService, public scenarioService: ScenarioService) {}

  ngOnInit(): void {
    this.scenarioService.getScenarios().subscribe({
      next: (data: Scenario[]) => {
        this.scenarios = data;
      }
    });
    // Initial loading of scenarios with translations
    //this.loadScenarios();

    // Update scenarios when the language changes
    //this.translate.onLangChange.subscribe(() => {
      //this.loadScenarios();
    //});
  }
}
