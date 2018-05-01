import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reputation',
  templateUrl: './reputation.component.html',
  styleUrls: ['./reputation.component.css']
})
export class ReputationComponent implements OnInit {
  @Input() reputation: string;
  @Input() keywords: string[];
  constructor() { }

  ngOnInit() {
  }

}
