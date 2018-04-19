import { Component } from '@angular/core';
import {CompareListService} from "./services/compare-list.service";
import {PopulationService} from "./services/population.service";
import {ActivityService} from "./services/activity.service";
import {ImageService} from "./services/image.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CompareListService, PopulationService, ActivityService, ImageService]
})
export class AppComponent {
  title = "BERLO";
}
