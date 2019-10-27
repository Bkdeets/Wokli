import { DynamoWrapperService } from './../../services/dynamo-wrapper.service';
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
  wrapper: DynamoWrapperService;
  
  constructor(wrapper: DynamoWrapperService) { 
    this.wrapper = wrapper;
  }

  ngOnInit(){
    this.loadArticles();
  }

  ngOnChanges() {
    this.loadArticles();
  }

  async loadArticles(){
    let results = await this.wrapper.getTopArticles(5);
    this.articles = [];
    for (let res of results['response']['data']) {
      this.articles.push(
        {
          provider_code: res.provider_code.toUpperCase(),
          summary: res.headline,
          link: res.url
        }
      )
    }
  }

}
