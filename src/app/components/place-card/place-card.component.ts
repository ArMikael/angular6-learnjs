import { Component, OnInit, Input, Output } from '@angular/core';
import { IPlace } from '../../data/places';

@Component({
  selector: 'app-place-card',
  templateUrl: './place-card.component.html',
  styleUrls: ['./place-card.component.css']
})
export class PlaceCardComponent implements OnInit {

  @Input() public place: IPlace;
  @Output() public selectedPlace: IPlace;

  constructor() { }

  ngOnInit() {
  }

  getPlaceDetails() {

  }

}
