import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BrowserModule } from "@angular/platform-browser";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatRadioModule } from "@angular/material/radio";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatDividerModule } from "@angular/material/divider";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTabsModule } from "@angular/material/tabs";
import { NgxMatTimelineModule } from "../../../ngx-mat-timeline/src/lib/ngx-mat-timeline.module";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule,
        NoopAnimationsModule,
        FormsModule,
        HttpClientModule,

        MatButtonModule,
        MatButtonToggleModule,
        MatRadioModule,
        MatExpansionModule,
        MatCheckboxModule,
        MatCardModule,
        MatIconModule,
        MatDividerModule,
        MatToolbarModule,
        MatTabsModule,

        NgxMatTimelineModule
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
