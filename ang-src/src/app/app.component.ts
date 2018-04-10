import { Component } from '@angular/core';
import {CompareListService} from "./services/compare-list.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CompareListService]
})
export class AppComponent {
  title = "BERLO";
}
