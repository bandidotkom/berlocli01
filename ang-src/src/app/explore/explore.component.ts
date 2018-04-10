import { Component, OnInit } from '@angular/core';
import {CompareListService} from "../services/compare-list.service";

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {
  selected: string;
  constructor(private compareListService: CompareListService) { }

  ngOnInit() {
  }
  addToCompareList(){
    this.compareListService.addToList(this.selected);
  }
  onSelected(localty: string) {
    this.selected = localty;
  }

}
