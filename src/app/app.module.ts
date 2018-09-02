import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlaceCardComponent } from './components/place-card/place-card.component';
import { PlacesComponent } from './components/places/places.component';
import { PlacesFilterPipe } from './pipes/places-filter.pipe';
import { TemperatureConversionDirective } from './directives/temperature-conversion.directive';

@NgModule({
  declarations: [
    AppComponent,
    PlaceCardComponent,
    PlacesComponent,
    PlacesFilterPipe,
    TemperatureConversionDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
