import { DashboardComponent } from './../../pages/dashboard/dashboard.component';
import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { Chart } from "chart.js";
import { DEFAULT_INTERPOLATION_CONFIG } from "@angular/compiler";

@Component({
  selector: "app-bubble-chart",
  templateUrl: "./bubble-chart.component.html",
  styleUrls: ["./bubble-chart.component.scss"]
})
export class BubbleChartComponent implements OnInit, OnChanges {
  @Input() topics: any;
  @Input() selected_topic: any;
  dc: DashboardComponent;

  constructor() { 
  }

  ngOnInit() {
    this.requestData();
  }

  ngOnChanges() {
    this.requestData(false);
  }

  requestData(animate = true) {
    var duration = 1000;
    if (!animate) {
      duration = 0;
    }
    var canvas: any = document.getElementById("chartCanvas");
    var ctx = canvas.getContext("2d");
    var chart = new Chart(ctx, {
      type: "bubble",
      data: this.setData(),
      options: {
        legend: {
          display: false
        },
        onClick : (evt, item) => {
          let index = item[0]._datasetIndex;
          let topic_name = item[0]._chart.data.datasets[index].label;
          let event = new CustomEvent("setSelectedTopic", {
            detail: {
              topic_name: topic_name
            }
          });
          window.dispatchEvent(event);
        },
        animation: {
          duration: duration
        },
        layout: {
          padding: {
            left: 50,
            right: 50,
            top: 10,
            bottom: 10
          }
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: false,
                min: -100,
                max: 100,
                display: false
              },
              labels: {
                display: false
              },
              gridLines: {
                display: false,
                drawBorder: false
              }
            }
          ],
          xAxes: [
            {
              ticks: {
                beginAtZero: true,
                min: 1,
                display: false
              },
              gridLines: {
                display: false,
                drawBorder: false
              },
              labels: {
                display: true
              }
            }
          ]
        }
      }
    });
  }

  setData() {
    var data = {
      datasets: []
    };

    for (var index in this.topics) {
      var label = this.topics[index].name;
      var opacity = 0.4;

      if (label == this.selected_topic.name) {
        opacity = .8;
      }
      var backgroundColor = this.getBgColor(
        this.topics[index].sentiment_score,
        opacity
      );
      var hoverBackgroundColor = this.getBgColor(
        this.topics[index].sentiment_score,
        .8
      );
      var borderColor = this.getBorderColor(this.topics[index].category);
      var x = this.topics[index].time_active;
      var y = this.topics[index].sentiment_score;
      var r = this.topics[index].coffeepot_score/2;

      var dataset = {
        label: label,
        backgroundColor: backgroundColor, 
        borderColor: borderColor,
        borderWidth: 3,
        hoverBorderWidth: 5,
        hoverBackgroundColor: hoverBackgroundColor,
        data: [
          {
            x: x,
            y: y,
            r: r
          }
        ]
      };
      data.datasets.push(dataset);
    }
    return data;
  }

  getBorderColor(category: String) {
    switch (category) {
      case "Politics":
        return "#f5b802";
      case "Weather":
        return "#02b4f5";
      case "Finance":
        return "rgba(3, 212, 65)";
    }
  }

  getBgColor(sentiment: number, opacity: number) {
    if (sentiment >= 0) {
      return "rgba(77, 255, 157,".concat(String(opacity).concat(")"));
    } else {
      return "rgba(255, 77, 77,".concat(String(opacity).concat(")"));
    }
  }
}
