import { Component, OnInit } from '@angular/core';
import {CompareListService} from "../services/compare-list.service";
import {PopulationService} from "../services/population.service";

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {
  selected: string;
  constructor(private compareListService: CompareListService,
              private populationService: PopulationService) { }

  ngOnInit() {

  }
  addToCompareList(){
    this.compareListService.addToList(this.selected);
  }
  onSelected(localty: string) {
    this.selected = localty;
  }
  isSelected() {
    return this.selected!=undefined;
  }

  showFacts() {
    this.populationService.getPopulation(this.selected)
      .subscribe(
        (population: any) => {console.log(population)}
      );
  }

}
