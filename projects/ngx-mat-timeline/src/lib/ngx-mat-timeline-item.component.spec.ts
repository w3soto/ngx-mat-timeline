import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { MatIconModule, MatIconRegistry } from "@angular/material/icon";
import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { DomSanitizer } from "@angular/platform-browser";

import { NgxMatTimeline } from "./ngx-mat-timeline.component";
import { NgxMatTimelineItem, NgxMatTimelineItemIcon, NgxMatTimelineItemLabel } from './ngx-mat-timeline-item.component';


describe('NgxMatTimelineItem', () => {
  let component: NgxMatTimelineItem;
  let fixture: ComponentFixture<NgxMatTimelineItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        NgxMatTimelineItem,
        NgxMatTimelineItemIcon,
        NgxMatTimelineItemLabel,
      ],
      imports: [
        CommonModule,
        MatIconModule,
        HttpClientTestingModule
      ]
    })
    .overrideComponent(NgxMatTimelineItem, {
      set: {
        changeDetection: ChangeDetectionStrategy.Default
      }
    })
    .compileComponents();
  });

  beforeEach(inject(
    [MatIconRegistry, DomSanitizer], (mir: MatIconRegistry, sanitizer: DomSanitizer) => {

    const sanitizedUrl = sanitizer.bypassSecurityTrustResourceUrl(':home');
    mir.addSvgIcon("home", sanitizedUrl);

    fixture = TestBed.createComponent(NgxMatTimelineItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display icon', () => {
    component.icon = 'home';
    fixture.detectChanges();

    const icon = fixture.nativeElement.querySelector('.ngx-mat-timeline-item-icon');
    expect(icon).toBeTruthy();
    expect(icon.nodeName).toEqual('MAT-ICON');
    expect(icon.textContent).toEqual('home');

  });

  it('should display svgIcon', () => {
    component.svgIcon = 'home';
    fixture.detectChanges();

    const icon = fixture.nativeElement.querySelector('.ngx-mat-timeline-item-icon');
    expect(icon).toBeTruthy();
    expect(icon.nodeName).toEqual('MAT-ICON');
    expect(icon.getAttribute('data-mat-icon-type')).toEqual('svg');
    expect(icon.getAttribute('data-mat-icon-name')).toEqual('home');
  });

  it('should display iconUrl', () => {
    component.iconUrl = 'https://some.url';
    fixture.detectChanges();

    const icon = fixture.nativeElement.querySelector('.ngx-mat-timeline-item-icon');
    expect(icon).toBeTruthy();
    expect(icon.nodeName).toEqual('IMG');
    expect(icon.getAttribute('src')).toEqual('https://some.url');
  });

  it('should display label', () => {
    component.label = 'Hello World';
    fixture.detectChanges();

    const label = fixture.nativeElement.querySelector('.ngx-mat-timeline-item-label');
    expect(label).toBeTruthy();
    expect(label.textContent).toEqual('Hello World');
  });

});


@Component({
  selector: 'test-component',
  template: `
    <ngx-mat-timeline>
      <ngx-mat-timeline-item>
        <ng-template ngxMatTimelineItemIcon>
          <div class="custom-icon">X</div>
        </ng-template>
        <ng-template ngxMatTimelineItemLabel>
          <div class="custom-label">Custom Label</div>
        </ng-template>
        <div class="custom-content">Custom Content</div>
      </ngx-mat-timeline-item>
    </ngx-mat-timeline>
  `
})
class TestComponent {
}

describe('NgxMatTimelineItem (with custom icon, label and content)', () => {

  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        NgxMatTimeline,
        NgxMatTimelineItem,
        NgxMatTimelineItemIcon,
        NgxMatTimelineItemLabel,
      ],
      imports: [
        CommonModule,
        MatIconModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should project custom icon', () => {
    const el = fixture.nativeElement.querySelector('.custom-icon');
    expect(el).toBeTruthy();
    expect(el.textContent).toEqual('X');
  });

  it('should project custom label', () => {
    const el = fixture.nativeElement.querySelector('.custom-label');
    expect(el).toBeTruthy();
    expect(el.textContent).toEqual('Custom Label');
  });

  it('should project custom content', () => {
    const el = fixture.nativeElement.querySelector('.custom-content');
    expect(el).toBeTruthy();
    expect(el.textContent).toEqual('Custom Content');
  });

});
