import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreateTrackerComponent } from './component/create-tracker/create-tracker.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TrackerBodyComponent } from './component/tracker-body/tracker-body.component';
import { TrackerDetailComponent } from './component/tracker-detail/tracker-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateTrackerComponent,
    TrackerBodyComponent,
    TrackerDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
