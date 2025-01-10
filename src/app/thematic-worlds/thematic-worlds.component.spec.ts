import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThematicWorldsComponent } from './thematic-worlds.component';

describe('ThematicWorldsComponent', () => {
  let component: ThematicWorldsComponent;
  let fixture: ComponentFixture<ThematicWorldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThematicWorldsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThematicWorldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
