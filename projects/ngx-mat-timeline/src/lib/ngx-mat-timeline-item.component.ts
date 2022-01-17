import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewEncapsulation
} from '@angular/core';


@Directive({
  selector: 'ngx-mat-timeline-item-icon, [ngxMatTimelineItemIcon]',
})
export class NgxMatTimelineItemIconDirective {
}

@Directive({
  selector: 'ngx-mat-timeline-item-label, [ngxMatTimelineItemLabel]',
})
export class NgxMatTimelineItemLabelDirective {
}


@Component({
  selector: 'ngx-mat-timeline-item',
  templateUrl: './ngx-mat-timeline-item.component.html',
  styleUrls: ['./ngx-mat-timeline-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'ngx-mat-timeline-item'
  }
})
export class NgxMatTimelineItemComponent implements OnInit {

  @Input()
  label?: string | null;

  @Input()
  icon?: string | null;

  @Input()
  svgIcon?: string | null;

  @Input()
  iconUrl?: string | null;

  @ContentChild(NgxMatTimelineItemIconDirective, {read: TemplateRef})
  customIconTpl?: TemplateRef<any>;

  @ContentChild(NgxMatTimelineItemLabelDirective, {read: TemplateRef})
  customLabelTpl?: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
