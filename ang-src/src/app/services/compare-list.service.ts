import { Injectable } from '@angular/core';

@Injectable()
export class CompareListService {
  compareList: string[] = [];
  constructor() { }

  getList() {
    return this.compareList;
  }

  addToList(localty: string) {
    let i = this.compareList.length;
    if (localty == undefined) {
      alert("Please select a localty first.")
    }
    else if (this.compareList.includes(localty)) {
      alert(localty + " was already added.");
    }
    else if (i >= 5) {
      alert("You can compare only 5 localties at maximum.");
    }
    else {
      this.compareList[i] = localty;
    }
  }

  deleteFromList(localty: string) {
    var index = this.compareList.indexOf(localty, 0);
    if (index > -1) {
      this.compareList.splice(index, 1);
    }
  }
}
