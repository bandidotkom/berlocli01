import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from './app.component';

import { MapComponent } from './map/map.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ExploreComponent } from './explore/explore.component';
import { SearchComponent } from './search/search.component';
import { routing } from './app.routing';
import { CompareComponent } from './compare/compare.component';
import { HttpClientModule } from "@angular/common/http";
import { HeaderComponent } from './header/header.component';
import { ImagesComponent } from './images/images.component';
import { FactsComponent } from './facts/facts.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ReputationComponent } from './reputation/reputation.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    WelcomeComponent,
    ExploreComponent,
    SearchComponent,
    CompareComponent,
    HeaderComponent,
    ImagesComponent,
    FactsComponent,
    ActivitiesComponent,
    ReputationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LeafletModule.forRoot(),
    routing,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
