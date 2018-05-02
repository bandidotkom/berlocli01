import { Component, OnInit } from '@angular/core';
import {CompareListService} from "../services/compare-list.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  compareList: string[];
  constructor(private compareListService: CompareListService) { }
  ngOnInit() {
    this.compareList = this.compareListService.getList();
  }

  delete(e) {
    let localty = e.target.parentElement.innerHTML.split('<')[0].trim();
    this.compareListService.deleteFromList(localty);
  }

  isDisabled() {
    if (this.compareList.length>1){
      return "nav-link";
    } else {
      return "nav-link disabled";
    }
  }


}
