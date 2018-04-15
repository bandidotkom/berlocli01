import { Component, OnInit } from '@angular/core';
import {PopulationService} from "../services/population.service";
import {CompareListService} from "../services/compare-list.service";

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {

  constructor(private compareListService: CompareListService, private populationService: PopulationService) { }

  ngOnInit() {
    const cList = this.compareListService.getList();
    for (const loc of cList){
      this.populationService.getPopulation(loc)
        .subscribe(
          (population: any) => {console.log(population)}
        );
    }
  }



}
