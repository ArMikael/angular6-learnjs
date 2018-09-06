import { IPlace } from '../../data/places';

export const GET_PLACES_PENDING = 'GET_PLACES_PENDING';
export const GET_PLACES_SUCCESS = 'GET_PLACES_SUCCESS';
export const GET_PLACES_ERROR = 'GET_PLACES_ERROR';

export class GetPlacesPending {
  public type = GET_PLACES_PENDING;
}

export class GetPlacesSuccess {
  public type = GET_PLACES_SUCCESS;
  public constructor(public payload: IPlace[]) {}
}

export class GetPlacesError {
  public type = GET_PLACES_ERROR;
  public constructor(public payload: any) {}
}
