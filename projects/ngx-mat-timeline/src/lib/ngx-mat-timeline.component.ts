import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  ElementRef,
  HostBinding,
  Input, NgZone, OnChanges,
  OnDestroy,
  OnInit,
  QueryList, SimpleChanges,
  ViewEncapsulation
} from '@angular/core';
import { NgxMatTimelineItem } from "./ngx-mat-timeline-item.component";
import { Observable, Subject } from "rxjs";
import { first, takeUntil, tap, throttleTime } from "rxjs/operators";


export type NGX_MAT_TIMELINE_POSITION = 'start' | 'end' | 'center' | 'center-alt';


export type NGX_MAT_TIMELINE_ORIENTATION = 'vertical' | 'horizontal';


@Component({
  selector: 'ngx-mat-timeline',
  templateUrl: './ngx-mat-timeline.component.html',
  styleUrls: ['./ngx-mat-timeline.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'ngx-mat-timeline'
  }
})
export class NgxMatTimeline implements OnInit, OnDestroy, OnChanges {

  @Input()
  set position(position: NGX_MAT_TIMELINE_POSITION) {
    this._position = position;
    this.updateLayout();
  }
  private _position: NGX_MAT_TIMELINE_POSITION = 'start';

  @Input()
  set orientation(orientation: NGX_MAT_TIMELINE_ORIENTATION) {
    this._orientation = orientation;
    this.updateLayout();
  }
  private _orientation: NGX_MAT_TIMELINE_ORIENTATION = 'vertical';

  @Input()
  set reverse(reverse: boolean) {
    this._reverse = reverse;
    this.updateLayout();
  }
  _reverse: boolean = false;

  @HostBinding('class.ngx-mat-timeline-start')
  get isStartPosition(): boolean {
    return this._position == 'start';
  }

  @HostBinding('class.ngx-mat-timeline-end')
  get isEndPosition(): boolean {
    return this._position == 'end';
  }

  @HostBinding('class.ngx-mat-timeline-center')
  get isCenterPosition(): boolean {
    return this._position == 'center';
  }

  @HostBinding('class.ngx-mat-timeline-center-alt')
  get isCenterAltPosition(): boolean {
    return this._position == 'center-alt';
  }

  @HostBinding('class.ngx-mat-timeline-vertical')
  get isVerticalOrientation(): boolean {
    return this._orientation == 'vertical';
  }

  @HostBinding('class.ngx-mat-timeline-horizontal')
  get isHorizontalOrientation(): boolean {
    return this._orientation == 'horizontal';
  }

  @HostBinding('class.ngx-mat-timeline-reverse')
  get isReverse(): boolean {
    return this._reverse;
  }

  @ContentChildren(NgxMatTimelineItem)
  readonly items: QueryList<NgxMatTimelineItem> = new QueryList();

  private _destroyed: Subject<void> = new Subject();

  constructor(
    private _host: ElementRef,
    private _ngZone: NgZone
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    this._ngZone.onStable.pipe(
      tap(() => this.updateLayout()),
      first()
    ).subscribe();
  }

  ngOnInit() {
    new Observable(observer => {
      const ro = new ResizeObserver(entries => observer.next(entries));
      ro.observe(this._host.nativeElement);
      // unsubscribe callback
      return () => {
        ro.unobserve(this._host.nativeElement);
        ro.disconnect();
      }
    }).pipe(
      throttleTime(10),
      tap(() => this.updateLayout()),
      takeUntil(this._destroyed)
    ).subscribe();
  }

  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
  }

  updateLayout() {
    if (this.isCenterPosition || this.isCenterAltPosition) {
      this.items.forEach(item => {
        if (this.isVerticalOrientation) {
          item._updateVerticalCenteredLayout();
        } else {
          item._updateHorizontalCenteredLayout();
        }
      });
    }
  }

}
