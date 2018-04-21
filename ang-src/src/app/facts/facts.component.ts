import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.css']
})
export class FactsComponent implements OnInit {
  @Input() genderFacts: any;
  @Input() natFacts: any;
  @Input() ageFacts: any;

  showLegend = true;
  colorScheme= {
    domain: ['#0F3899', '#6DA1D8', '#D2FDFF']
  };
  // pie options
  showLabels = true;
  explodeSlices = false;
  doughnut = false;

  // bar chart options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showXAxisLabel = true;
  xAxisLabel = 'Age';
  showYAxisLabel = true;
  yAxisLabel = 'Population';


  onSelect(event) {
    console.log(event);
  }


  ngOnInit() {
  }

}

