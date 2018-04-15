import { Component } from '@angular/core';
import {CompareListService} from "./services/compare-list.service";
import {PopulationService} from "./services/population.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CompareListService, PopulationService]
})
export class AppComponent {
  title = "BERLO";
}
