import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";

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
    CommonModule,
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
