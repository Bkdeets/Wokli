import { DashboardService } from './../../pages/dashboard/dashboard.service';
import { DashboardComponent } from './../../pages/dashboard/dashboard.component';
import { Component, OnInit, Input, Output, EventEmitter, AfterContentInit } from '@angular/core';
import { Topic } from 'src/app/objects/Topic';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.scss']
})
export class TopicListComponent implements OnInit, AfterContentInit {
  @Input() topics: Array<Topic>;
  @Output() selected: EventEmitter<String> = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(){
    const dash_h = document.getElementById('dashboard').offsetHeight;
    let topic_list_elem = document.getElementById('topic-list');
    const margin_h = 16*5;
    const topic_list_h = dash_h - margin_h;
    topic_list_elem.style.height = String(topic_list_h) + 'px';
  }

  setDashboardTopic(topic){
    this.selected.emit(topic);
  }

  shortDisplay(text: String){
    if(text.length > 25){
      return text.substr(0,25) + '...'
    }
    return text
  }

}
