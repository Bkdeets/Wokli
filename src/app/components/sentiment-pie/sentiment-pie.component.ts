import { Component, OnInit } from '@angular/core';
import { Chart } from "chart.js";

@Component({
  selector: 'app-sentiment-pie',
  templateUrl: './sentiment-pie.component.html',
  styleUrls: ['./sentiment-pie.component.scss']
})
export class SentimentPieComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.requestData();
  }

  requestData() {
    var canvas: any = document.getElementById("pieCanvas");
    var ctx = canvas.getContext("2d");
    var dataList = {
      datasets: [{
          data: [60, 40],
          backgroundColor: [
            '#42f59b',
            '#f54242'
          ]
      }],
      labels: [
          'Positive',
          'Negative'
      ]
  };
    var myPieChart = new Chart(ctx, {
      type: 'pie',
      data: dataList,
      options: {}
  });
  }

}
