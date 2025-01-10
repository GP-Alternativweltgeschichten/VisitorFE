import {Component, OnInit} from '@angular/core';
import {ThematicWorld} from '../services/ThematicWorld';
import {ThematicWorldService} from '../services/thematicWorldService';

@Component({
  selector: 'app-thematic-worlds',
  templateUrl: './thematic-worlds.component.html',
  styleUrl: './thematic-worlds.component.css'
})
export class ThematicWorldsComponent implements OnInit {
  thematicWorlds: ThematicWorld[] = [];

  constructor(private thematicWorldsService: ThematicWorldService) { }

  ngOnInit(): void {
    this.thematicWorldsService.getThematicWorlds().subscribe({
      next: (data: ThematicWorld[]) => {
        this.thematicWorlds = data;
      }
    })


  }

  createImageFromBlob(image: Blob): any {
    if (image === null) {
      return;
    }
    let map: any;
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      map = reader.result;
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }

    return map;
  }

}
