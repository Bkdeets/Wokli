import { DashboardService } from './dashboard.service';
import { Component, OnInit, HostListener } from '@angular/core';
import { Topic } from 'src/app/objects/Topic';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  selected_topic: Topic;
  topics = [
    new Topic(1,"Topic 1",['Tag1', 'Tag2', 'Tag3'],25,88,"Weather",1),
    new Topic(2,"Very Long Topic Name 2",['Tag1', 'Tag2', 'Tag3'],25,67,"Politics",4),
    new Topic(3,"Very Much Longer Topic Name 3 that should not be this long",['Tag1', 'Tag2', 'Tag3'],25,67,"Finance",8),
    new Topic(4,"Topic 4",['Tag1', 'Tag2', 'Tag3'],12,35,"Weather",12),
    new Topic(5,"Topic 5",['Tag1', 'Tag2', 'Tag3'],80,8,"Politics",2),
    new Topic(6,"Topic 6",['Tag1', 'Tag2', 'Tag3'],56,97,"Finance",1),
    new Topic(7,"Topic 7",['Tag1', 'Tag2', 'Tag3'],95,20,"Weather",2),
    new Topic(8,"Topic 8",['Tag1', 'Tag2', 'Tag3'],33,12,"Politics",3),
    new Topic(9,"Topic 9",['Tag1', 'Tag2', 'Tag3'],28,44,"Weather",10),
    new Topic(10,"Topic 10",['Tag1', 'Tag2', 'Tag3'],79,67,"Finance",5)
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
