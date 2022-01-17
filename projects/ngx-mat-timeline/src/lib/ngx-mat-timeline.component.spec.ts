import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMatTimelineComponent } from './ngx-mat-timeline.component';

describe('NgxMatTimelineComponent', () => {
  let component: NgxMatTimelineComponent;
  let fixture: ComponentFixture<NgxMatTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxMatTimelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMatTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
