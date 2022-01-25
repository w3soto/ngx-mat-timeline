import { NgModule } from '@angular/core';
import { MatIconModule } from "@angular/material/icon";
import { BrowserModule } from "@angular/platform-browser";

import { NgxMatTimeline } from './ngx-mat-timeline.component';
import {
  NgxMatTimelineItem,
  NgxMatTimelineItemIcon,
  NgxMatTimelineItemLabel
} from './ngx-mat-timeline-item.component';


@NgModule({
  declarations: [
    NgxMatTimeline,
    NgxMatTimelineItem,
    NgxMatTimelineItemIcon,
    NgxMatTimelineItemLabel,
  ],
  imports: [
    BrowserModule,
    MatIconModule
  ],
  exports: [
    NgxMatTimeline,
    NgxMatTimelineItem,
    NgxMatTimelineItemIcon,
    NgxMatTimelineItemLabel,
  ]
})
export class NgxMatTimelineModule { }
