import { Pipe, PipeTransform } from '@angular/core';
import { IPlace } from '../data/places';

@Pipe({
  name: 'placesFilter'
})
export class PlacesFilterPipe implements PipeTransform {

  transform(places: IPlace[], typeFilter?: string): IPlace[] {
    if (!typeFilter || typeFilter === 'all') { return places; }

    return places.filter((place: IPlace) => {
      return place.type === typeFilter;
    });
  }

}
