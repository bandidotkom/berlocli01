import { Component, OnInit } from '@angular/core';
import {HeaderComponent} from "../header/header.component";

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {
  selected: string;
  constructor() { }
  compareListExplore = [];
  ngOnInit() {
  }

  onSelected(localty: string) {
    this.selected = localty;
  }
  addToCompare() {
    let i = this.compareListExplore.length;
    if (this.compareListExplore.includes(this.selected)) {
      alert(this.selected + " was already added.");
    }
    else if (i < 5) {
      this.compareListExplore[i] = this.selected;
      console.log(this.compareListExplore);
    }
    else {
      alert("You can compare only 5 localties at maximum.");
    }
  }

}
