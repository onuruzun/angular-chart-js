import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

  constructor() { }

  public chartType: string = "pie";
  public chartLabel: string[] = [];
  public chartData: number[] = [];

  chartFilled() {

    this.chartLabel.push('Red', 'Blue', 'Yellow', 'Gray', 'Green');

    this.chartData.push(12, 22, 32, 42, 52);

  }

  chartOptions = {

    animation: {
      duration: 1000,
      easing: "easeInOutQuad"
    },

    responsive: true,
    legend: {
      display: true,
      position: "right",
      fullWidth: false,
      reverse: true
    },
  };


  ngOnInit() {
    this.chartFilled();
  }

}
