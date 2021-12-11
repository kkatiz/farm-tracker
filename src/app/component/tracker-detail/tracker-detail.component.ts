import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracker-detail',
  templateUrl: './tracker-detail.component.html',
  styleUrls: ['./tracker-detail.component.scss']
})
export class TrackerDetailComponent implements OnInit {
  @Input() Age: number;
  @Input() id: number;
  @Input() Type: string;
  @Input() Medicalhistory1: string;
  @Input() Overall: number;
  @Input() Place: string;

  constructor() { }

  ngOnInit(): void {
  }

}
