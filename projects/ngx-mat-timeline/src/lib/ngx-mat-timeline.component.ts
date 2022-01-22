import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  ViewEncapsulation
} from '@angular/core';


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
export class NgxMatTimelineComponent {

  private _position: NGX_MAT_TIMELINE_POSITION = 'start';

  @Input()
  set position(position: NGX_MAT_TIMELINE_POSITION) {
    this._position = position;
  }

  private _orientation: NGX_MAT_TIMELINE_ORIENTATION = 'vertical';

  @Input()
  set orientation(orientation: NGX_MAT_TIMELINE_ORIENTATION) {
    this._orientation = orientation;
  }

  _reverse: boolean = false;

  @Input()
  set reverse(reverse: boolean) {
    this._reverse = reverse;
  }

  @HostBinding('class.ngx-mat-timeline--start')
  get isStartPosition(): boolean {
    return this._position == 'start';
  }

  @HostBinding('class.ngx-mat-timeline--end')
  get isEndPosition(): boolean {
    return this._position == 'end';
  }

  @HostBinding('class.ngx-mat-timeline--center')
  get isCenterPosition(): boolean {
    return this._position == 'center';
  }

  @HostBinding('class.ngx-mat-timeline--center-alt')
  get isCenterAltPosition(): boolean {
    return this._position == 'center-alt';
  }

  @HostBinding('class.ngx-mat-timeline--vertical')
  get isVerticalOrientation(): boolean {
    return this._orientation == 'vertical';
  }

  @HostBinding('class.ngx-mat-timeline--horizontal')
  get isHorizontalOrientation(): boolean {
    return this._orientation == 'horizontal';
  }

  @HostBinding('class.ngx-mat-timeline--reverse')
  get isReverse(): boolean {
    return this._reverse;
  }

}
