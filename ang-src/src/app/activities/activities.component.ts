import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {
  @Input() wmActivities: any;
  @Input() waActivities: any;
  @Input() weActivities: any;
  constructor() { }
  showLegend = false;
  colorScheme= {
    domain: ['#0F3899', '#6DA1D8', '#D2FDFF']
  };
  // pie options
  showLabels = true;
  explodeSlices = false;
  doughnut = false;

  onSelect(event) {
    console.log(event);
  }

  ngOnInit() {
  }

}
