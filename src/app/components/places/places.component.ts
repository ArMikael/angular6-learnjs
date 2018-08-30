import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Observable} from 'rxjs';

import { IPlace, places$ } from '../../data/places';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {

  public places$: Observable<IPlace[]> = places$;
  public uniquePlaces: string[];
  public selectedFilter: string;
  public currentPlace: IPlace;

  @Output() public activatedPlaceReceived: EventEmitter<IPlace> = new EventEmitter<IPlace>();

  constructor() { }

  ngOnInit() {
    this.selectedFilter = '';

    this.places$.subscribe((places: IPlace[]) => {
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

    console.log('Place: ', place);
  }

}
