import { GET_PLACES_PENDING, GET_PLACES_SUCCESS, GET_PLACES_ERROR } from '../actions/places.action';
import { IPlace } from '../../data/places';

const initialState: IPlace[] = [];

export function placesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PLACES_SUCCESS:
      return action.payload;

    default:
      return state;
  }
}
