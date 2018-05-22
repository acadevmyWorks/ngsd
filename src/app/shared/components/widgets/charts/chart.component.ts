import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
    selector: 'app-chart',
    template: `
    <div [chart]="chart"></div>
    `
})
export class ChartComponent implements OnInit {
  @Input() series: {name: string, data: number[]}[];
  @Input() title: string;
  @Input() type: string;

  chart: Chart;
  ngOnInit() {
    this.chart = new Chart({
      chart: {
        type: this.type,
        height: '300px'
      },
      title: {
        text: this.title
      },
      credits: {
        enabled: false
      },
      series: this.series
    });
  }
  /*add() {
    this.chart.addPoint(Math.floor(Math.random() * 10));
  }*/
}
