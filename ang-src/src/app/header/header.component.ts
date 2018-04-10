import { Component, OnInit, Input } from '@angular/core';
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
    console.log(this.compareList);
  }

  delete(e) {
    let localty = e.target.parentElement.innerHTML.split('<')[0].trim();
    console.log(localty);
    this.compareListService.deleteFromList(localty);
  }

}
