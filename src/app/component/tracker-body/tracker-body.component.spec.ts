import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackerBodyComponent } from './tracker-body.component';

describe('TrackerBodyComponent', () => {
  let component: TrackerBodyComponent;
  let fixture: ComponentFixture<TrackerBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackerBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackerBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
