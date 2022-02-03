import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Directive,
  ElementRef,
  Input,
  TemplateRef,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';


@Directive({
  selector: 'ng-template[ngxMatTimelineItemIcon]',
})
export class NgxMatTimelineItemIcon {
}


@Directive({
  selector: 'ng-template[ngxMatTimelineItemLabel]',
})
export class NgxMatTimelineItemLabel {
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
export class NgxMatTimelineItem {

  @Input()
  label?: string | null;

  @Input()
  icon?: string | null;

  @Input()
  svgIcon?: string | null;

  @Input()
  iconUrl?: string | null;

  @ContentChild(NgxMatTimelineItemIcon, {read: TemplateRef})
  customIconTpl?: TemplateRef<any>;

  @ContentChild(NgxMatTimelineItemLabel, {read: TemplateRef})
  customLabelTpl?: TemplateRef<any>;

  @ViewChild('contentEl', {static: true})
  private _contentEl!: ElementRef;

  @ViewChild('fillEl', {static: true})
  private _fillEl!: ElementRef;

  constructor() {
  }

  _updateVerticalCenteredLayout() {
    this._fillEl.nativeElement.style.minWidth = this._contentEl.nativeElement.offsetWidth + 'px';
    this._fillEl.nativeElement.style.minHeight = 'unset';
  }

  _updateHorizontalCenteredLayout() {
    this._fillEl.nativeElement.style.minHeight = this._contentEl.nativeElement.offsetHeight + 'px';
    this._fillEl.nativeElement.style.minWidth = 'unset'
  }

}
