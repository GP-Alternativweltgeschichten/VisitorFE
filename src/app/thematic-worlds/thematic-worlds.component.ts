import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {ThematicWorld} from '../services/ThematicWorld';
import {ThematicWorldService} from '../services/thematicWorldService';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-thematic-worlds',
  templateUrl: './thematic-worlds.component.html',
  styleUrl: './thematic-worlds.component.css'
})
export class ThematicWorldsComponent implements OnInit, OnChanges {
  @Input() reload: boolean = false;
  @Output() mapToShow = new EventEmitter<any>();
  @Output() isMapEditable = new EventEmitter<boolean>();

  thematicWorlds: ThematicWorld[] = [];
  selectedWorld: ThematicWorld | null = null; // Tracks the selected world

  constructor(private thematicWorldsService: ThematicWorldService, private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.fetchThematicWorlds();
  }

  ngOnChanges(): void {
    this.fetchThematicWorlds();
  }

  private fetchThematicWorlds(): void {
    this.thematicWorldsService.getThematicWorlds().subscribe({
      next: (data: ThematicWorld[]) => {
        this.thematicWorlds = data.sort(({ isScenario: a = false }, { isScenario: b = false }) =>
          Number(b) - Number(a)
        ); // Sort by scenario
        if (this.thematicWorlds.length > 0) this.showThematicWorld(this.thematicWorlds[0]);
      }
    });
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

  showThematicWorld(thematicWorld: ThematicWorld): void {
    this.selectedWorld = thematicWorld;
    this.mapToShow.emit(this.createImageFromBlob(thematicWorld.image));

    if (thematicWorld.editable) {
      this.isMapEditable.emit(false);
    } else {
      this.isMapEditable.emit(true);
    }
  }
}
