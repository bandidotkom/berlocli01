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
  embeddedComp: number;
  urls: string[];
  constructor(private compareListService: CompareListService,
              private populationService: PopulationService,
              private activityService: ActivityService,
              private imageService: ImageService) { }

  ngOnInit() {
    this.embeddedComp = 1;
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

  showImages() {
    this.embeddedComp = 2;
    this.imageService.getImages(this.selected)
      .subscribe(
        (images: any) => {this.urls = images;}
      );
  }

  showFacts() {
    this.embeddedComp = 3;
    this.populationService.getPopulation(this.selected)
      .subscribe(
        (population: any) => {console.log(population)}
      );
  }

  showActivities() {
    this.embeddedComp = 4;
    this.activityService.getActivities(this.selected)
      .subscribe(
        (activities: any) => {console.log(activities)}
      );
  }

  getEmbeddedComponent(){
    return this.embeddedComp;
  }

  backToMap(){
    this.embeddedComp = 1;
  }
}
