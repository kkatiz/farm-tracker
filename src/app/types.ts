export interface Tracker extends TrackerForm{
  id: number;
}

export interface TrackerForm {
  Place: string;
  Overall: number;
  ImageURL: string;
  Age: number;
  Type: string;
  Medicalhistory1: string;
}

