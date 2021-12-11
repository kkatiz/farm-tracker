import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Tracker, TrackerForm } from 'src/app/types';

@Component({
  selector: 'app-create-tracker',
  templateUrl: './create-tracker.component.html',
  styleUrls: ['./create-tracker.component.scss']
})
export class CreateTrackerComponent {
  TrackerForm: FormGroup;

  @Output() trackerCreated: EventEmitter<TrackerForm> = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.TrackerForm = this.fb.group({
      Place: this.fb.control('', [Validators.required]),
      ImageURL: this.fb.control(''),
      Age: this.fb.control(''),
      Type: this.fb.control(''),
      Medicalhistory1: this.fb.control(''),
      Overall: this.fb.control(''),
    });
  }

  submitForm() {
    const formData: TrackerForm = {
      Place: this.TrackerForm.get('Place').value,
      ImageURL: this.TrackerForm.get('ImageURL').value,
      Age: this.TrackerForm.get('Age').value,
      Type: this.TrackerForm.get('Type').value,
      Medicalhistory1: this.TrackerForm.get('Medicalhistory1').value,
      Overall: this.TrackerForm.get('Overall').value,
    };

    this.trackerCreated.emit(formData);
  }
}
