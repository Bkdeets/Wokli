import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-bubble-chart',
  templateUrl: './bubble-chart.component.html',
  styleUrls: ['./bubble-chart.component.scss']
})
export class BubbleChartComponent implements OnInit {
  @Input() topics: any;

  constructor() { }

  ngOnInit() {
    console.log(this.topics);
    this.requestData();
  }

  requestData() {
    var canvas: any = document.getElementById("chartCanvas");
    var ctx = canvas.getContext("2d");
    var chart = new Chart(ctx, {
      type: "bubble",
      data: this.setData(),
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

  setData(){
    var data = {
      datasets: []
    };

    for (var index in this.topics){
      
      var label = this.topics[index].name;
      var backgroundColor = this.getBgColor(this.topics[index].sentiment_score);
      var borderColor = this.getBorderColor(this.topics[index].category);
      var x = this.topics[index].time_active;
      var y = this.topics[index].sentiment_score;
      var r = this.topics[index].wokli_score;

      var dataset = {
        label: label,
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        borderWidth: 3,
        data: [{
          x: x,
          y: y,
          r: r
        }]
      };
      console.log(dataset.label);
      data.datasets.push(dataset);

    }
    console.log(data);
    return data;
  }

  getBorderColor(category: String) {
    switch (category){
      case 'Politics':
        return "#ffb84d";
      case 'Weather':
          return "rgba(180, 206, 240)";
      case 'Finance':
          return "rgba(3, 212, 65)";
    }

  }

  getBgColor(sentiment: number){
    if(sentiment >= 0){
      return "rgba(77, 255, 157, .4)"
    } else {
      return "rgba(255, 77, 77, .4)"
    }
  }
}
