import { Component } from '@angular/core';
import {CompareListService} from "./services/compare-list.service";
import {FactService} from "./services/fact.service";
import {ActivityService} from "./services/activity.service";
import {ImageService} from "./services/image.service";
import {GeofactService} from "./services/geofact.service";
import {ReputationService} from "./services/reputation.service";
import {SearchService} from "./services/search.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CompareListService, FactService, ActivityService, ImageService, GeofactService, ReputationService, SearchService]
})
export class AppComponent {
  title = "BERLO";
}
