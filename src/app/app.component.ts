import { Component } from '@angular/core';
import { TrackerService } from './tracker-service/tracker.service';
import { Tracker, TrackerForm } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showCreate = false;
  activePoll: Tracker = null;

  setActivePoll(Tracker) {
    this.activePoll = Tracker;
  }

  Trackers = this.ps.getTracker();

  constructor(private ps: TrackerService) {}

  handleTrackerCreated(Tracker: TrackerForm) {
    this.ps.createTracker(Tracker);
  }

  ngOnInit() {
    this.ps.onEvent('Trackercreated').subscribe(() => {
      this.Trackers = this.ps.getTracker();
    });
  }
}
