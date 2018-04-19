import { Component, OnInit } from '@angular/core';
import {CompareListService} from "../services/compare-list.service";
import {PopulationService} from "../services/population.service";
import {ActivityService} from "../services/activity.service";
import {ImageService} from "../services/image.service";

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {
  selected: string;
  constructor(private compareListService: CompareListService,
              private populationService: PopulationService,
              private activityService: ActivityService,
              private imageService: ImageService) { }

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

  showActivities() {
    this.activityService.getActivities(this.selected)
      .subscribe(
        (activities: any) => {console.log(activities)}
      );
  }

  showImages() {
    this.imageService.getImages(this.selected)
      .subscribe(
        (images: any) => {console.log(images)}
      );
  }

}
