import { DashboardService } from './dashboard.service';
import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  selected_topic: any;
  topics = [
    {
      id: 1,
      name: "Data Structure Test",
      tags: ['Tag1', 'Tag2', 'Tag3'],
      sentiment_score: 25,
      perco_score: 67,
      category: "Weather",
      time_active: 1,
      news_items: [
        {
          provider_code: "NYT",
          summary: "Fee Fi Fo Fum",
          link: "goheretothis.com"
        },
        {
          provider_code: "NYT",
          summary: "Fee Fi Fo Fum",
          link: "goheretothis.com"
        },
        {
          provider_code: "NYT",
          summary: "Fee Fi Fo Fum",
          link: "goheretothis.com"
        },
      ]
    },
    {
      id: 2,
      name: "Data Structure Test 2",
      tags: ['Tag1', 'Tag2', 'Tag3'],
      sentiment_score: 50,
      perco_score: 12,
      category: "Finance",
      time_active: 9,
      news_items: [
        {
          provider_code: "TWTR",
          summary: "Fee Fi Fo Fum",
          link: "goheretothis.com"
        },
        {
          provider_code: "TWTR",
          summary: "Fee Fi Fo Fum",
          link: "goheretothis.com"
        },
        {
          provider_code: "TWTR",
          summary: "Fee Fi Fo Fum",
          link: "goheretothis.com"
        },
      ]
    },
    {
      id: 3,
      name: "Data Structure Test 3",
      tags: ['Tag1', 'Tag2', 'Tag3'],
      sentiment_score: 51,
      perco_score: 43,
      category: "Politics",
      time_active: 5,
      news_items: [
        {
          provider_code: "Reddit",
          summary: "Fee Fi Fo Fum",
          link: "goheretothis.com"
        },
        {
          provider_code: "Reddit",
          summary: "Fee Fi Fo Fum",
          link: "goheretothis.com"
        },
        {
          provider_code: "Reddit",
          summary: "Fee Fi Fo Fum",
          link: "goheretothis.com"
        },
      ]
    },
    {
      id: 4,
      name: "Data Structure Test 4",
      tags: ['Tag1', 'Tag2', 'Tag3'],
      sentiment_score: -28,
      perco_score: 43,
      category: "Weather",
      time_active: 6,
      news_items: [
        {
          provider_code: "WSJ",
          summary: "Fee Fi Fo Fum",
          link: "goheretothis.com"
        },
        {
          provider_code: "WSJ",
          summary: "Fee Fi Fo Fum",
          link: "goheretothis.com"
        },
        {
          provider_code: "WSJ",
          summary: "Fee Fi Fo Fum",
          link: "goheretothis.com"
        },
      ]
    },
    {
      id: 5,
      name: "Data Structure Test 5",
      tags: ['Tag1', 'Tag2', 'Tag3'],
      sentiment_score: 8,
      perco_score: 55,
      category: "Weather",
      time_active: 3,
      news_items: [
        {
          provider_code: "WSJ",
          summary: "Fee Fi Fo Fum",
          link: "goheretothis.com"
        },
        {
          provider_code: "WSJ",
          summary: "Fee Fi Fo Fum",
          link: "goheretothis.com"
        },
        {
          provider_code: "WSJ",
          summary: "Fee Fi Fo Fum",
          link: "goheretothis.com"
        },
      ]
    },
    {
      id: 6,
      name: "Data Structure Test 6",
      tags: ['Tag1', 'Tag2', 'Tag3'],
      sentiment_score: -58,
      perco_score: 82,
      category: "Weather",
      time_active: 2,
      news_items: [
        {
          provider_code: "WSJ",
          summary: "Fee Fi Fo Fum",
          link: "goheretothis.com"
        },
        {
          provider_code: "WSJ",
          summary: "Fee Fi Fo Fum",
          link: "goheretothis.com"
        },
        {
          provider_code: "WSJ",
          summary: "Fee Fi Fo Fum",
          link: "goheretothis.com"
        },
      ]
    },
    {
      id: 7,
      name: "Data Structure Test 7",
      tags: ['Tag1', 'Tag2', 'Tag3'],
      sentiment_score: -88,
      perco_score: 33,
      category: "Weather",
      time_active: 4,
      news_items: [
        {
          provider_code: "WSJ",
          summary: "Fee Fi Fo Fum",
          link: "goheretothis.com"
        },
        {
          provider_code: "WSJ",
          summary: "Fee Fi Fo Fum",
          link: "goheretothis.com"
        },
        {
          provider_code: "WSJ",
          summary: "Fee Fi Fo Fum",
          link: "goheretothis.com"
        },
      ]
    }
  ]

  constructor(
    private dashboardService: DashboardService
  ) { }

  ngOnInit() {
    this.selected_topic = this.topics[0];
  }
  @HostListener("window:setSelectedTopic", ['$event.detail'])
  setSelectedTopicByJS(event) {
    this.setSelectedTopic(event.topic_name);
  }
  
  setSelectedTopic(topic_name: String) {
    for (var index in this.topics) {
      if (this.topics[index].name == topic_name) {
        this.selected_topic = this.topics[index];
      }
    }
  }

}
