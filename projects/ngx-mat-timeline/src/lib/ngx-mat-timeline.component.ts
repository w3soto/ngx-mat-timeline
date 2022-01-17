import { ChangeDetectionStrategy, Component, HostBinding, Input, OnInit, ViewEncapsulation } from '@angular/core';

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
export class NgxMatTimelineComponent implements OnInit {

  @Input()
  set position(position: 'start' | 'end') {
    this._position = position;
  }
  private _position: 'start' | 'end' = 'start';

  @Input()
  set orientation(orientation: 'vertical' | 'horizontal') {
    this._orientation = orientation;
  }
  private _orientation: 'vertical' | 'horizontal' = 'vertical';

  @HostBinding('class.ngx-mat-timeline--start')
  get isStartPosition(): boolean {
    return this._position == 'start';
  }

  @HostBinding('class.ngx-mat-timeline--end')
  get isEndPosition(): boolean {
    return this._position == 'end';
  }

  @HostBinding('class.ngx-mat-timeline--vertical')
  get isVerticalOrientation(): boolean {
    return this._orientation == 'vertical';
  }

  @HostBinding('class.ngx-mat-timeline--horizontal')
  get isHorizontalOrientation(): boolean {
    return this._orientation == 'horizontal';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
