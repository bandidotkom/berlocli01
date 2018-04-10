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
    if (this.compareList.includes(localty)) {
      alert(localty + " was already added.");
    }
    else if (i < 5) {
      this.compareList[i] = localty;
      console.log(this.compareList);
    }
    else {
      alert("You can compare only 5 localties at maximum.");
    }
  }

  deleteFromList(localty: string) {
    var index = this.compareList.indexOf(localty, 0);
    if (index > -1) {
      this.compareList.splice(index, 1);
    }
  }
}
