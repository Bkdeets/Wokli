import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { TopicListComponent } from '../topic-list/topic-list.component';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss']
})
export class NewsFeedComponent implements OnChanges, OnInit {
  @Input() topic: any;
  articles: any;
  
  constructor() { }

  ngOnInit(){
    this.articles = this.topic.news_items;
  }

  ngOnChanges() {
    this.articles = this.topic.news_items;
  }

}
