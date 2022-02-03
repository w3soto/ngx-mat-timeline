import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMatTimeline } from './ngx-mat-timeline.component';
import { NgxMatTimelineItem } from "./ngx-mat-timeline-item.component";
import { MatIconModule } from "@angular/material/icon";
import { CommonModule } from "@angular/common";
import { By } from "@angular/platform-browser";


describe('NgxMatTimeline', () => {
  let component: NgxMatTimeline;
  let fixture: ComponentFixture<NgxMatTimeline>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        NgxMatTimeline,
        NgxMatTimelineItem
      ],
      imports: [
        CommonModule,
        MatIconModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMatTimeline);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set position start', () => {
    component.position = 'start';
    fixture.detectChanges();

    const componentEl = fixture.debugElement.nativeElement;
    expect(componentEl.classList.contains('ngx-mat-timeline-start')).toBeTrue();
  });

  it('should set position center', () => {
    component.position = 'center';
    fixture.detectChanges();

    const componentEl = fixture.debugElement.nativeElement;
    expect(componentEl.classList.contains('ngx-mat-timeline-center')).toBeTrue();

    const contentEl = fixture.debugElement.query(By.css('.ngx-mat-timeline-content')).nativeElement;
    expect(window.getComputedStyle(contentEl).alignItems).toEqual('center');
  });

  it('should set position center-alt', () => {
    component.position = 'center-alt';
    fixture.detectChanges();

    const componentEl = fixture.debugElement.nativeElement;
    expect(componentEl.classList.contains('ngx-mat-timeline-center-alt')).toBeTrue();

    const contentEl = fixture.debugElement.query(By.css('.ngx-mat-timeline-content')).nativeElement;
    expect(window.getComputedStyle(contentEl).alignItems).toEqual('center');
  });

  it('should set position end', () => {
    component.position = 'end';
    fixture.detectChanges();

    const componentEl = fixture.debugElement.nativeElement;
    expect(componentEl.classList.contains('ngx-mat-timeline-end')).toBeTrue();
  });

  it('should set orientation vertical', () => {
    component.orientation = 'vertical';
    fixture.detectChanges();

    const componentEl = fixture.debugElement.nativeElement;
    expect(componentEl.classList.contains('ngx-mat-timeline-vertical')).toBeTrue();

    const contentEl = fixture.debugElement.query(By.css('.ngx-mat-timeline-content')).nativeElement;
    expect(window.getComputedStyle(contentEl).flexDirection).toEqual('column');
  });

  it('should set orientation horizontal', () => {
    component.orientation = 'horizontal';
    fixture.detectChanges();

    const componentEl = fixture.debugElement.nativeElement;
    expect(componentEl.classList.contains('ngx-mat-timeline-horizontal')).toBeTrue();

    const contentEl = fixture.debugElement.query(By.css('.ngx-mat-timeline-content')).nativeElement;
    expect(window.getComputedStyle(contentEl).flexDirection).toEqual('row');
  });

  it('should set vertical reversed', () => {
    component.orientation = 'vertical';
    component.reverse = true;
    fixture.detectChanges();

    const contentEl = fixture.debugElement.query(By.css('.ngx-mat-timeline-content')).nativeElement;
    expect(window.getComputedStyle(contentEl).flexDirection).toEqual('column-reverse');
  });

  it('should set horizontal reversed', () => {
    component.orientation = 'horizontal';
    component.reverse = true;
    fixture.detectChanges();

    const contentEl = fixture.debugElement.query(By.css('.ngx-mat-timeline-content')).nativeElement;
    expect(window.getComputedStyle(contentEl).flexDirection).toEqual('row-reverse');
  });

});
