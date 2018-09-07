import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

import { IPlace } from '../../data/places';
import { GetPlacesPending } from "../../store/actions/places.action";
import { Store } from "@ngrx/store";

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {

  public places$: Observable<IPlace[]>;
  public uniquePlaces: string[];
  public selectedFilter: string;
  public currentPlace: IPlace;

  @Output() public activatedPlaceReceived: EventEmitter<IPlace> = new EventEmitter();

  constructor(private _store: Store<any>) {
  }

  ngOnInit() {
    this.selectedFilter = '';

    this._store.dispatch(new GetPlacesPending());
    this.places$ = this._store.select('places');
    
    this.places$.subscribe((places: IPlace[]) => {
      // Creating array of places for filters panel
      const placesTypes = places.map(place => place.type);
      this.currentPlace = places[0];

      // Set default place for app bootstrap
      this.activatedPlaceReceived.emit(this.currentPlace);

      this.uniquePlaces = placesTypes.filter((val, index, self) => {
        return self.indexOf(val) === index;
      });
    });
  }

  showPlaceDetails(place) {
    this.currentPlace = place;
    this.activatedPlaceReceived.emit(place);
  }

}
