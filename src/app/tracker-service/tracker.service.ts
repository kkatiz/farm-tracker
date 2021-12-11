import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Tracker, TrackerForm } from '../types';
import { delay } from 'rxjs/operators';
import { Web3Service } from '../blockchain/web3.service';


@Injectable({
  providedIn: 'root'
})
export class TrackerService {

  constructor(private web3: Web3Service) { }

  async getTracker(): Promise<Tracker[]> {
    const trackers: Tracker[] = [];

    const totalTracker = await this.web3.call('getTotalTracker');

    for (let i = 0; i < totalTracker; i++) {
      const pollRaw = await this.web3.call('getTracker', i);
      const pollNormalized = this.normalizePoll(pollRaw);
      trackers.push(pollNormalized);
    }

    return trackers;
  }

  createTracker(Tracker: TrackerForm) {
    this.web3.executeTransaction(
      'createTracker',
      Tracker.Place,
      Tracker.ImageURL,
      Tracker.Age,
      Tracker.Type,
      Tracker.Medicalhistory1,
      Tracker.Overall
    );
  }

  private normalizePoll(pollRaw): Tracker {
    return {
      id: parseInt(pollRaw[0]),
      Place: pollRaw[1],
      ImageURL: pollRaw[2],
      Age: pollRaw[3],
      Type: pollRaw[4],
      Medicalhistory1: pollRaw[5],
      Overall: pollRaw[6],
    };
  }

  onEvent(name: string) {
    return this.web3.onEvents(name);
  }
}
