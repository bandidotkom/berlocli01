import { Component, OnInit } from '@angular/core';
import {FactService} from "../services/fact.service";
import {CompareListService} from "../services/compare-list.service";
import {GeofactService} from "../services/geofact.service";
import {ActivityService} from "../services/activity.service";

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {
  cList = [];
  genderData = {};
  nationalityData = {};
  ageData = {};
  geoData = {};
  wmActivities = {};
  waActivities = {};
  weActivities = {};

  showLegend = true;
  colorScheme= {
    domain: ['#0F3899', '#6DA1D8', '#D2FDFF']
  };
  // pie options
  showLabels = true;
  explodeSlices = false;
  doughnut = false;

  // bar chart options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showXAxisLabel = true;
  xAxisLabel = 'Age';
  showYAxisLabel = true;
  yAxisLabel = 'Population';


  onSelect(event) {
    console.log(event);
  }


  constructor(private compareListService: CompareListService,
              private factService: FactService,
              private geoService: GeofactService,
              private activityService: ActivityService) { }

  compare(a, b) {
    if (a.value > b.value)
      return -1;
    if (a.value < b.value)
      return 1;
    return 0;
  }
  ngOnInit() {
    this.cList = this.compareListService.getList();

    for (const loc of this.cList){
      this.factService.getPopulation(loc)
        .subscribe(
          (population: any) => {
            console.log(population);
            this.genderData[loc] = population.gender;
            this.nationalityData[loc] = population.nationality;
            this.ageData[loc] = population.age;}
        );
    }

    for (const loc of this.cList){
      this.geoService.getFacts(loc)
        .subscribe(
          (geodata: any) => {this.geoData[loc] = geodata;}
        );
    }
    for (const loc of this.cList){
      this.activityService.getActivities(loc)
        .subscribe(
          (activities: any) => {
            if (activities.wm.length>7) {
              this.wmActivities[loc] = activities.wm.sort(this.compare).slice(0,7);
            }else{this.wmActivities[loc] = activities.wm;}
            if (activities.wa.length>7) {
              this.waActivities[loc] = activities.wa.sort(this.compare).slice(0,7);
            }else{this.waActivities[loc] = activities.wa;}
            if (activities.we.length>7) {
              this.weActivities[loc] = activities.we.sort(this.compare).slice(0,7);
            }else{this.weActivities[loc] = activities.we;}
          }
        );
    }
  }


}
