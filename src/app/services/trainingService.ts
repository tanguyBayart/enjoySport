import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { Training } from '../interfaces/training.interface';
import { Trainings } from '../interfaces/trainings.interface';

@Injectable({ providedIn: 'root' })
export class TrainingService {
  private _training$: BehaviorSubject<Training[]> = new BehaviorSubject(null);
  public get training$(): BehaviorSubject<Training[]> {
    return this._training$;
  }
  public set training$(value: BehaviorSubject<Training[]>) {
    this._training$ = value;
  }

  //   public getCocktail(index: number): Observable<Cocktail> {
  //     return this.cocktails$.pipe(
  //       filter((cocktails: Cocktail[]) => cocktails !== null),
  //       map((cocktails: Cocktail[]) => {
  //         return cocktails[index];
  //       })
  //     );
  //   }

  //   public addCocktail(cocktail: Cocktail): Observable<Cocktail> {
  //     return this.http
  //       .post<Cocktail>('https://restapi.fr/api/cocktails', cocktail)
  //       .pipe(
  //         tap((savedCocktail: Cocktail) => {
  //           const value = this.cocktails$.value;
  //           this.cocktails$.next([...value, savedCocktail]);
  //         })
  //       );
  //   }

  //   public editCocktail(
  //     cocktailId: string,
  //     editedCocktail: Cocktail
  //   ): Observable<Cocktail> {
  //     return this.http
  //       .patch<Cocktail>(
  //         `https://restapi.fr/api/cocktails/${cocktailId}`,
  //         editedCocktail
  //       )
  //       .pipe(
  //         tap((savedCocktail: Cocktail) => {
  //           this.cocktails$.next(
  //             this.cocktails$.value.map((cocktail: Cocktail) => {
  //               if (cocktail.name === savedCocktail.name) {
  //                 return savedCocktail;
  //               } else {
  //                 return cocktail;
  //               }
  //             })
  //           );
  //         })
  //       );
  //   }

  //   public fetchCocktail(): Observable<Cocktail[]> {
  //     return this.http.get('https://restapi.fr/api/cocktails').pipe(
  //       tap((cocktails: Cocktail[]) => {
  //         this.cocktails$.next(cocktails);
  //       })
  //     );
  //   }

  constructor(private http: HttpClient) {
    // this.seed();
    // console.log('[CocktailService] cocktails$ ' + this.cocktails$);
  }
}
// }
