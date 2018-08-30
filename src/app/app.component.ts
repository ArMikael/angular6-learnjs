import { Component } from '@angular/core';
import {Observable} from 'rxjs';

import { IPlace, places$ } from './data/places';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular6-learnjs';

  public places$: Observable<IPlace[]> = places$;
}
