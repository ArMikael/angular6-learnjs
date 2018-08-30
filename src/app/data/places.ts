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
    address: 'Dan Panorama, Eilat, Israel',
    phone: 9726389999,
    weather: {
      title: 'Hot and crazy',
      icon: 'cloud',
      water: 24,
      temperature: 41
    },
    social_info: {
      title: 'DanPanorama',
      img: 'assets/images/social1.jpg',
      followers: 2344,
      following: 240
    },
    type: 'hotel'
  },
  {
    img: 'assets/images/herods.jpg',
    address: 'Herods Palace, Eilat, Israel',
    phone: 9725435435,
    weather: {
      title: 'Very Hot',
      icon: 'cloud',
      water: 26,
      temperature: 39
    },
    social_info: {
      title: 'HerodsPalace',
      img: 'assets/images/social2.jpg',
      followers: 32424,
      following: 436
    },
    type: 'hotel'
  },
  {
    img: 'assets/images/beach.jpg',
    address: 'Palmachim Beach',
    phone: 972111111,
    weather: {
      title: 'Very very Hot',
      icon: 'hot',
      water: 22,
      temperature: 37
    },
    social_info: {
      title: 'Palmachim',
      img: 'assets/images/social-beach.jpg',
      followers: 23334,
      following: 111
    },
    type: 'beach'
  },
  {
    img: 'assets/images/pub.jpg',
    address: 'Mike\'s Place, Jerusalem, Israel',
    phone: 9725435435,
    weather: {
      title: 'Nice Weather',
      icon: 'cloud',
      water: 20,
      temperature: 33
    },
    social_info: {
      title: 'MikesPlace',
      img: 'assets/images/social-pub.jpg',
      followers: 5423,
      following: 546
    },
    type: 'pub'
  }
];

export const places$: Observable<IPlace[]> = of(places)
  .pipe(
    map((placesArr: IPlace[]) => placesArr.filter((place: IPlace) => place.img)),
    delay(1000)
  );
