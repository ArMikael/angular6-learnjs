import { Component, OnInit, Input } from '@angular/core';
import { IPlace } from '../../data/places';

@Component({
  selector: 'app-nav-panel',
  templateUrl: './nav-panel.component.html',
  styleUrls: ['./nav-panel.component.css']
})
export class NavPanelComponent implements OnInit {

  constructor() { }
  @Input() public places: IPlace[];
  public uniquePlaces: string[];
  public placesFilter: string;

  ngOnInit() {
    const placesTypes = this.places.map(place => place.type);

    this.uniquePlaces = placesTypes.filter((val, index, self) => {
      return self.indexOf(val) === index;
    });
  }

}
