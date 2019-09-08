import { DashboardService } from './dashboard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  selected_topic: String;
  topics = [
    'Hurricane Dorian',
    'Diving Boat Fire',
    'Hurricane Season',
    'Trump Tweet',
    'Brexit',
    'Yield Curve Inversion',
    '2020 Olympics',
    '2020 Election',
    'Viral Video',
    'Meme'
  ]

  constructor(
    private dashboardService: DashboardService
  ) { }

  ngOnInit() {
    this.selected_topic = this.topics[0];
  }

  setSelectedTopic(topic: String) {
    this.selected_topic = topic;
  }

}
