import { DashboardService } from './../../pages/dashboard/dashboard.service';
import { DashboardComponent } from './../../pages/dashboard/dashboard.component';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.scss']
})
export class TopicListComponent implements OnInit {
  @Input() topics: Array<String>;
  @Output() selected: EventEmitter<String> = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  setDashboardTopic(topic){
    this.selected.emit(topic);
  }

}
