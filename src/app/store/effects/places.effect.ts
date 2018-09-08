import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Action} from '@ngrx/store';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';
import { IPlace } from '../../data/places';
import { GET_PLACES_PENDING, GetPlacesError, GetPlacesSuccess } from "../actions/places.action";

const BASE_URL = './data';

@Injectable()
export class PlacesEffects {

  public constructor(
    private _http: HttpClient,
    private actions$: Actions
  ) {}
    
  // Listen for the 'GET_PLACES_PENDING' action
  @Effect()
  places$: Observable<Action> = this.actions$.pipe(
    ofType(GET_PLACES_PENDING),
    switchMap(() =>
      this._http.get('assets/data/places.json')
        .pipe(
          map((res: IPlace[]) => new GetPlacesSuccess(res)),
          catchError((err) => of(new GetPlacesError(err)))
        )
    )
  );
}
