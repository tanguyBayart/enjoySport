import { Training } from './training.interface';

export interface Trainings {
  _id?: string;
  date: Date;
  trainings: Training[];
}
