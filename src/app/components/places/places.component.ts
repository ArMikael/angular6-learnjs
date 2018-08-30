import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit() {
    this.selectedFilter = '';

    this.places$.subscribe((places: IPlace[]) => {
      const placesTypes = places.map(place => place.type);
      this.currentPlace = places[0];

        this.uniquePlaces = placesTypes.filter((val, index, self) => {
        return self.indexOf(val) === index;
      });
    });
  }

  showPlaceDetails(place) {
    this.currentPlace = place;
    console.log('Place: ', place);
  }

}
