import { Component, OnInit } from '@angular/core';
import {CompareListService} from "../services/compare-list.service";
import {FactService} from "../services/fact.service";
import {ActivityService} from "../services/activity.service";
import {ImageService} from "../services/image.service";
import {GeofactService} from "../services/geofact.service";
import {ReputationService} from "../services/reputation.service";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {
  selected: string;
  embeddedComp: number;
  urls: string[];
  genderFacts: any;
  natFacts: any;
  ageFacts: any;
  wmActivities: any;
  waActivities: any;
  weActivities: any;
  area: string;
  population: number;
  density: number;
  reputation: string;
  keywords: string[];
  constructor(private compareListService: CompareListService,
              private factService: FactService,
              private activityService: ActivityService,
              private imageService: ImageService,
              private geoFactService: GeofactService,
              private reputationService: ReputationService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.embeddedComp = 1;
    this.route.params.subscribe(params => this.selected = params['selected']);
    if (this.selected){
      this.showGeoFacts();
    }
  }
  addToCompareList(){
    this.compareListService.addToList(this.selected);
  }
  onSelected(locality: string) {
    this.selected = locality;
    this.showGeoFacts();
  }
  isSelected() {
    return this.selected!=undefined;
  }

  showGeoFacts() {
    this.geoFactService.getFacts(this.selected)
      .subscribe(
        (data: any) => {
          this.area = data.area;
          this.population = data.population;
          this.density = data.density;

        });
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
    this.factService.getPopulation(this.selected)
      .subscribe(
        (facts: any) => {
          this.genderFacts = facts.gender;
          //console.log(this.genderFacts);
          this.natFacts = facts.nationality;
          //console.log(this.natFacts);
          this.ageFacts = facts.age;
          //console.log(this.ageFacts);
        });
  }
  compare(a, b) {
    if (a.value > b.value)
      return -1;
    if (a.value < b.value)
      return 1;
    return 0;
  }

  showActivities() {
    this.embeddedComp = 4;
    this.activityService.getActivities(this.selected)
      .subscribe(
        (activities: any) => {
          if (activities.wm.length>12) {
            this.wmActivities = activities.wm.sort(this.compare).slice(0,12);
          }else{this.wmActivities = activities.wm;}
          if (activities.wa.length>12) {
            this.waActivities = activities.wa.sort(this.compare).slice(0,12);
          }else{this.waActivities = activities.wa;}
          if (activities.we.length>12) {
            this.weActivities = activities.we.sort(this.compare).slice(0,12);
            }else{this.weActivities = activities.we;}
        }
      );
  }

  showReputation() {
    this.embeddedComp = 5;
    this.reputationService.getReputation(this.selected)
      .subscribe(
        (reputation: any) => {
          this.reputation = reputation.summary;
          //console.log(this.reputation);
          this.keywords = reputation.keywords;
          //console.log(this.keywords)
        });
  }

  getEmbeddedComponent(){
    return this.embeddedComp;
  }

  backToMap(){
    this.embeddedComp = 1;
  }


}
