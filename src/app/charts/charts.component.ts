import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  constructor() { }

  public chartType: string = "bar";
  public chartLabel: string[] = [];
  barChartData: any;

  chartFilled() {

    this.chartLabel.push('Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange');

    this.barChartData = [
      { data: [12, 22, 32, 42, 52, 62, 72], label: 'Value 1' },
      { data: [88, 33, 22, 77, 21, 19, 99], label: 'Value 2' }
    ];

  }


  chartOptions = {


    tooltips: {
      display: true,
      backgroundColor: '#fff',
      titleFontSize: 14,
      titleFontColor: 'chocolate',
      bodyFontColor: '#000',
      bodyFontSize: 12,
      displayColors: false,
    },

    animation: {
      duration: 1000,
      easing: "easeInOutQuad"
    },
    responsive: true,
    legend: {
      display: true,
      position: 'top',
      cornerRadius: 10,
      titleSpacing: 4,
      footerFontStyle: 'bold',
      multiKeyBackground: '#eee'
    },
    hover: {
      mode: 'nearest',
      intersect: true
    },
    scales: {
      xAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Data',
        }
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: "Data Value"
        },
      }]
    }
  }

  ngOnInit() {
    this.chartFilled();
  }


}
