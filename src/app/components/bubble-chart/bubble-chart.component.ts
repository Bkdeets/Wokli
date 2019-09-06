import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-bubble-chart',
  templateUrl: './bubble-chart.component.html',
  styleUrls: ['./bubble-chart.component.scss']
})
export class BubbleChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.requestData();
  }

  requestData() {
    var canvas: any = document.getElementById("chartCanvas");
    var ctx = canvas.getContext("2d");
    var chart = new Chart(ctx, {
      type: "bubble",
      data: {
        datasets: [
          {
            label: "Topic 1",
            backgroundColor: "rgb(200, 99, 132)",
            data: [{
              x: 2,
              y: -70,
              r: 20
            }]
          },
          {
            label: "Topic 2",
            backgroundColor: "rgb(25, 299, 132)",
            data: [{
              x: 4,
              y: 39,
              r: 6
            }]
          },
          {
            label: "Topic 3",
            backgroundColor: "rgb(25, 200, 12)",
            data: [{
              x: 9,
              y: 67,
              r: 15
            }]
          },
          {
            label: "Topic 4",
            backgroundColor: "rgb(25, 200, 12)",
            data: [{
              x: 5,
              y: 10,
              r: 50
            }]
          },
          {
            label: "Topic 5",
            backgroundColor: "rgb(25, 20, 12)",
            data: [{
              x: 10,
              y: 50,
              r: 30
            }]
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        layout: {
          padding: {
              left: 0,
              right: 50,
              top: 10,
              bottom: 10
          }
        },
        scales: { 
          yAxes: [{ 
            ticks: { 
              beginAtZero: false,
              min: -100, 
              max: 100
            },
          labels: {
            display: false
          }
          }],
          xAxes: [{ 
            ticks: { 
              beginAtZero: true,
              min: 1
            } 
          }]  
        }
      }
    });
  }
}
