import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { AppComponent } from './app.component';

import { MapComponent } from './map/map.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ExploreComponent } from './explore/explore.component';
import { SearchComponent } from './search/search.component';
import { routing } from './app.routing';
import { CompareComponent } from './compare/compare.component';
import { HttpClientModule } from "@angular/common/http";
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    WelcomeComponent,
    ExploreComponent,
    SearchComponent,
    CompareComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LeafletModule.forRoot(),
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
