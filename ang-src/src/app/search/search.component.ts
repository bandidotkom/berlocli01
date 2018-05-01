import { Component, OnInit } from '@angular/core';
import {SearchService} from "../services/search.service";
import {CompareListService} from "../services/compare-list.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  //preferences = "park lake villa";
  resultList: any;
  constructor(private searchService: SearchService,
              private compareListService: CompareListService) { }

  showResults(preferences: string) {

    this.searchService.getSearchresults(preferences.replace(/,/g, ''))
      .subscribe(
        (results: any) => {
          this.resultList = results;
          //console.log(this.reputation);
        });
  }

  addToCompareList(locality:string){
    this.compareListService.addToList(locality);
  }

  ngOnInit() {
  }

}
