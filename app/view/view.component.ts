import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  pieChartData =  {
    chartType: 'PieChart',
    dataTable: [
      ['States', 'Death percentage'],
      ['Uttarpradesh', 11],
      ['Tamilnadu', 2],
      ['Maharahtra', 2],
      ['Karnataka', 2],
      ['Rajasthan', 7],
      ['Madhya Pradesh', 6.4],
      ['Andhra Pradesh', 5.7],
      ['Gujarat', 5.4],
      ['Telangana', 4.8],
      ['West Bengal', 4.3],
      ['Punjab', 3.4],
      ['Haryana', 3.3],
      ['Bihar', 3.3],
      ['Others', 16.3]
    ],
    options: {
      'title': 'DEATHS IN 13 STATES,UP ON TOP',
      'width': 800,
      'height': 600
  }
  };

  pieChartData1 =  {
    chartType: 'PieChart',
    dataTable: [
      ['Years', 'percentage'],
      ['0-5 years', 40.3],
      ['5-10 years', 32.7],
      ['10-15 years', 15.4],
      ['15+ years', 9.4],
      ['Not known', 2.2]
    ],
    options: {
      'width': 800,
      'height': 420
  }
  };

  constructor() { }

  ngOnInit() {

  }
}


