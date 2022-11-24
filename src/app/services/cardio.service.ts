import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cardio } from '../interfaces/cardio.interface';

@Injectable({ providedIn: 'root' })
export class CardioService {
  private _training$: BehaviorSubject<Cardio[]> = new BehaviorSubject(null);

  public get training$(): BehaviorSubject<Cardio[]> {
    return this._training$;
  }

  public set training$(value: BehaviorSubject<Cardio[]>) {
    this._training$ = value;
  }

  public addTraining() {
    console.log('### CardioService : addTraining() start');
    console.log('### CardioService : addTraining() end');
  }
  public editTraining() {
    console.log('### CardioService : editTraining() start');
    console.log('### CardioService : editTraining() end');
  }
}
