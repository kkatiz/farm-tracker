import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracker-body',
  templateUrl: './tracker-body.component.html',
  styleUrls: ['./tracker-body.component.scss']
})
export class TrackerBodyComponent implements OnInit {
  @Input() Place: string;
  @Input() ImageURL: string;

  constructor() { }

  ngOnInit(): void {
  }

}
