import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMatTimelineItemComponent } from './ngx-mat-timeline-item.component';

describe('NgxMatTimelineItemComponent', () => {
  let component: NgxMatTimelineItemComponent;
  let fixture: ComponentFixture<NgxMatTimelineItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxMatTimelineItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMatTimelineItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
