import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.scss']
})
export class RadarChartComponent implements OnInit {

  public chartType: string = "radar";
  public chartLabel: string[] = [];
  chartData: any;

  chartFilled() {

    this.chartLabel.push('Q1', 'Q2', 'Q3', 'Q4');

    this.chartData = [
      { data: [90, 150, 200, 45], label: '2018' },
      { data: [320, 230, 280, 70], label: '2019' }
    ];

  }


  chartOptions = {

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
  }

  ngOnInit() {
    this.chartFilled();
  }

}
