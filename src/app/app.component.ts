import { Component } from '@angular/core';
import { IPlace } from './data/places';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public selectedPlace: IPlace;

  showPlaceDetails(place: IPlace): void {
    this.selectedPlace = place;
  }

}
