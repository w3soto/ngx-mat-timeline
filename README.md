# NgxMatTimeline

Timeline component for Angular Material

[StackBlitz Demo](https://stackblitz.com/edit/angular-ivy-xzfky8)

[GitHub](https://github.com/w3soto/ngx-mat-timeline)

[NPM](https://www.npmjs.com/package/ngx-mat-timeline)

## Features
* Vertical and Horizontal orientation
* Left, Center and Right position
* Reversed direction
* Support for Google Material Icons (including SVG) and images
* Custom icon and label directives  

![Screenshot](https://raw.githubusercontent.com/w3soto/ngx-mat-timeline/master/readme/basic-example.png "Screenshot")

## Installation
```shell
npm -i ngx-mat-timeline
```

## Example

Fro more details see *projects/demo* application

```typescript
import { NgxMatTimelineModule } from "ngx-mat-timeline";
...

@NgModule({
  imports: [
    ...,
    NgxMatTimelineModule,
  ],
  ...
})
class AppModule { ... }

```

Basic template 
```html
<ngx-mat-timeline 
  position="center" 
  orientation="horizontal">

  <ngx-mat-timeline-item
    *ngFor="let item of timelineItems"
    [icon]="item.icon"
    [label]="item.label">

    {{ item.content }}
    
  </ngx-mat-timeline-item>

</ngx-mat-timeline>
```

Custom template 
```html
<ngx-mat-timeline 
  position="center" 
  orientation="horizontal">

  <ngx-mat-timeline-item
    *ngFor="let item of timelineItems; let idx = index;">

    <ng-template ngxMatTimelineItemIcon>
      <div class="custom-icon">{{ idx + 1 }}</div>
    </ng-template>

    <ng-template ngxMatTimelineItemLabel>
      <div class="custom-label">{{ item.label }}</div>
    </ng-template>

    <div class="custom-content">
      <img [src]="'./assets/image' + (idx + 1) + '.jpg'"> 
      {{ item.content }}
    </div>
    
  </ngx-mat-timeline-item>

</ngx-mat-timeline>
```

## Components
 
* **ngx-mat-timeline**

| @Input | Type | Available values | Default |
| ----- | ---- | ---------------- | ------- |
| **orientation** | string | vertical, horizontal | vertical |
| **position** | string | start, center, center-alt, end | start |
| **reverse** | boolean | | false |

* **ngx-mat-timeline-item**

| @Input | Type | Available values | Default |
| ----- | ---- | ---------------- | ------- |
| **icon** | string | Standard MatIcon value |  |
| **svgIcon** | string | Standard MatIcon value (svgIcon) |  |
| **iconUrl** | string | Image url  |  |
| **label** | string | Text |  |

Note: If multiple icons are defined, only first one is displayed (*icon* or *svgIcon* or *iconUrl*).

## Directives 

Use with *ng-template*.

* **ngxMatTimelineItemIcon** or **ngx-mat-timeline-item-icon**

* **ngxMatTimelineItemLabel** or **ngx-mat-timeline-item-label**
