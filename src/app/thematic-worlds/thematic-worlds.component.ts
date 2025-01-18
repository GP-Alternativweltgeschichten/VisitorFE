import {Component, OnInit} from '@angular/core';
import {ThematicWorld} from '../services/ThematicWorld';
import {ThematicWorldService} from '../services/thematicWorldService';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-thematic-worlds',
  templateUrl: './thematic-worlds.component.html',
  styleUrl: './thematic-worlds.component.css'
})
export class ThematicWorldsComponent implements OnInit {
  thematicWorlds: ThematicWorld[] = [];

  constructor(private thematicWorldsService: ThematicWorldService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.thematicWorldsService.getThematicWorlds().subscribe({
      next: (data: ThematicWorld[]) => {
        this.thematicWorlds = data;
      }
    })
  }

  createImageFromBlob(image: any): any {
    if (image === null) {
      return;
    }
    let map: any;
    let objectURL = 'data:image/png;base64,' + image;
    map = this.sanitizer.bypassSecurityTrustUrl(objectURL);

    return map;
  }

}
