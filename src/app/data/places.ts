import {Observable, of} from 'rxjs';
import {delay, map} from 'rxjs/internal/operators';

export interface IPlace {
  img: string;
  address: string;
  phone: number;   // дополнительно задание pipe для форматирования
  weather: {
    title: string;
    icon: string;
    water: number;
    temperature: number;
  };
  social_info: {
    title: string;
    img: string;
    followers: number;
    following: number;
  };
  type: string;
}


const places: IPlace[] = [
  {
    img: 'assets/images/1.jpg',
    address: 'Dan Panorama Eilat',
    phone: 9726389999,
    weather: {
      title: 'Hot and crazy',
      icon: 'cloud',
      water: 24,
      temperature: 41
    },
    social_info: {
      title: 'DanPanorama',
      img: 'assets/images/b1.jpg',
      followers: 2344,
      following: 240
    },
    type: 'hotel'
  },
  {
    img: 'assets/images/1.jpg',
    address: 'Herods Palace',
    phone: 9725435435,
    weather: {
      title: 'Very Hot',
      icon: 'cloud',
      water: 26,
      temperature: 39
    },
    social_info: {
      title: 'HerodsPalace',
      img: 'assets/images/b1.jpg',
      followers: 32424,
      following: 436
    },
    type: 'hotel'
  }
];

export const places$: Observable<IPlace[]> = of(places)
  .pipe(
    map((placesArr: IPlace[]) => placesArr.filter((place: IPlace) => place.img)),
    delay(1000)
  );
