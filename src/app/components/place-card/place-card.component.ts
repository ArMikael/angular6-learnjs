import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IPlace } from '../../data/places';

@Component({
  selector: 'app-place-card',
  templateUrl: './place-card.component.html',
  styleUrls: ['./place-card.component.css']
})
export class PlaceCardComponent implements OnInit {

  @Input() public place: IPlace;
  @Output() public placeActivated: EventEmitter<IPlace> = new EventEmitter<IPlace>();

  constructor() { }

  ngOnInit() {

  }

  getPlaceDetails(place: IPlace) {
    this.placeActivated.emit(place);
  }

}
