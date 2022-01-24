import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { NgxMatTimelineComponent } from "./ngx-mat-timeline.component";


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
export class NgxMatTimelineItemComponent implements OnInit, OnDestroy {

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

  @ViewChild('contentEl', {static: true})
  private _contentEl!: ElementRef;

  @ViewChild('fillEl', {static: true})
  private _fillEl!: ElementRef;

  private _resizeObserver!: ResizeObserver;

  constructor(
    private _host: ElementRef,
    private _timeline: NgxMatTimelineComponent
  ) {
  }

  ngOnInit(): void {
    this._resizeObserver = new ResizeObserver(this._updateLayout.bind(this));
    this._resizeObserver.observe(this._host.nativeElement);
  }

  ngOnDestroy() {
    this._resizeObserver.unobserve(this._host.nativeElement);
    this._resizeObserver.disconnect();
  }

  private _updateLayout() {
    if (this._timeline.isCenterPosition || this._timeline.isCenterAltPosition) {
      if (this._timeline.isHorizontalOrientation) {
        this._fillEl.nativeElement.style.minHeight = this._contentEl.nativeElement.offsetHeight + 'px';
        this._fillEl.nativeElement.style.minWidth = 'unset';
      } else {
        this._fillEl.nativeElement.style.minWidth = this._contentEl.nativeElement.offsetWidth + 'px';
        this._fillEl.nativeElement.style.minHeight = 'unset';
      }
    }
  }

}
