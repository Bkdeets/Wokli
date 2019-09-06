import { Component, OnInit } from "@angular/core";
import { Chart } from "chart.js";

@Component({
  selector: "app-line-chart",
  templateUrl: "./line-chart.component.html",
  styleUrls: ["./line-chart.component.scss"]
})
export class LineChartComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.requestData();
  }

  requestData() {
    var canvas: any = document.getElementById("chartCanvas");
    var ctx = canvas.getContext("2d");
    var dataList = [
      {
        x: 10,
        y: 20
      },
      {
        x: 15,
        y: 17
      },
      {
        x: 20,
        y: 12
      },
      {
        x: 15,
        y: 25
      },
      {
        x: 12,
        y: 40
      },
      {
        x: 30,
        y: 18
      },
      {
        x: 7,
        y: 15
      },
      {
        x: 19,
        y: 10
      }
    ];
    var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: "line",

      // The data for our dataset
      data: {
        labels: ['1','2','3','4','5','6','7'],
        datasets: [
          {
            borderColor: "rgb(200, 99, 132)",
            data: [0, 10, 5, 2, 20, 30, 45]
          },
          {
            borderColor: "rgb(25, 299, 132)",
            data: [6, 35, 20, 20, 10, 50, 9]
          },
          {
            borderColor: "rgb(25, 200, 12)",
            data: [24, 37, 16, 48, 5, 12, 20]
          }
        ]
      },

      // Configuration options go here
      options: {
        legend: {
          display: false
        }
      }
    });
  }
}
