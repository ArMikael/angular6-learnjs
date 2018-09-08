import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { PlaceCardComponent } from './components/place-card/place-card.component';
import { PlacesComponent } from './components/places/places.component';
import { PlacesFilterPipe } from './pipes/places-filter.pipe';
import { TemperatureConversionDirective } from './directives/temperature-conversion.directive';
import { placesReducer } from "./store/reducers/places.reducer";
import { PlacesEffects } from './store/effects/places.effect';


@NgModule({
  declarations: [
    AppComponent,
    PlaceCardComponent,
    PlacesComponent,
    PlacesFilterPipe,
    TemperatureConversionDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({ places: placesReducer }),
    EffectsModule.forRoot([PlacesEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [ ]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
