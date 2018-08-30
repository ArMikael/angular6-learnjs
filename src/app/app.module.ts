import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavPanelComponent } from './components/nav-panel/nav-panel.component';
import { PlaceCardComponent } from './components/place-card/place-card.component';
import { PlacesComponent } from './components/places/places.component';
import { PlacesFilterPipe } from './pipes/places-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavPanelComponent,
    PlaceCardComponent,
    PlacesComponent,
    PlacesFilterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
