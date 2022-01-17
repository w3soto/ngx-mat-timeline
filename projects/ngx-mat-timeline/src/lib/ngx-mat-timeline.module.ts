import { NgModule } from '@angular/core';
import { NgxMatTimelineComponent } from './ngx-mat-timeline.component';
import {
  NgxMatTimelineItemComponent,
  NgxMatTimelineItemIconDirective,
  NgxMatTimelineItemLabelDirective
} from './ngx-mat-timeline-item.component';
import { MatIconModule } from "@angular/material/icon";
import { BrowserModule } from "@angular/platform-browser";



@NgModule({
  declarations: [
    NgxMatTimelineComponent,
    NgxMatTimelineItemComponent,
    NgxMatTimelineItemIconDirective,
    NgxMatTimelineItemLabelDirective,
  ],
  imports: [
    BrowserModule,
    MatIconModule
  ],
  exports: [
    NgxMatTimelineComponent,
    NgxMatTimelineItemComponent,
    NgxMatTimelineItemIconDirective,
    NgxMatTimelineItemLabelDirective,
  ]
})
export class NgxMatTimelineModule { }
