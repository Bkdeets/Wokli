import { DynamoWrapperService } from './../../services/dynamo-wrapper.service';
import { Component, OnInit, Input, OnChanges, AfterContentInit } from '@angular/core';
import { TopicListComponent } from '../topic-list/topic-list.component';
import { Article } from 'src/app/objects/Article';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss']
})
export class NewsFeedComponent implements OnChanges, OnInit, AfterContentInit {
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

  ngAfterContentInit(){
    const dash_h = document.getElementById('dashboard').offsetHeight;
    const chart_h = document.getElementById('chart-div').offsetHeight;
    const margin_h = 16*5;
    const padding_h = 16*6;
    const news_feed_h = dash_h - chart_h - margin_h - padding_h;
    let news_feed_elem = document.getElementById('news-feed');
    news_feed_elem.style.maxHeight = String(news_feed_h) + 'px';
  }

  openLink(url) {
    window.open(url, "_blank");
  }

  async loadArticles(){
    // let results = await this.wrapper.getTopArticles(5);
    // this.articles = [];
    // for (let res of results['response']['data']) {
    //   this.articles.push(
    //     new Article(res.provider_code.toUpperCase(), res.headline, res.url)
    //   )
    // }
    this.articles = [
      new Article("YHN", "Short one", "https://news.yahoo.com/39-bodies-including-one-teenager-123746693.html"),
      new Article("RED", "LOooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong one", "https://news.yahoo.com/39-bodies-including-one-teenager-123746693.html"),
      new Article("YHN", "39 Bodies Including One Teenager Found in Back of Semitrailer in Britain", "https://news.yahoo.com/39-bodies-including-one-teenager-123746693.html"),
      new Article("RED", "39 Bodies Including One Teenager Found in Back of Semitrailer in Britain", "https://news.yahoo.com/39-bodies-including-one-teenager-123746693.html"),
      new Article("YHN", "39 Bodies Including One Teenager Found in Back of Semitrailer in Britain", "https://news.yahoo.com/39-bodies-including-one-teenager-123746693.html"),
      new Article("RED", "39 Bodies Including One Teenager Found in Back of Semitrailer in Britain", "https://news.yahoo.com/39-bodies-including-one-teenager-123746693.html"),
      new Article("YHN", "39 Bodies Including One Teenager Found in Back of Semitrailer in Britain", "https://news.yahoo.com/39-bodies-including-one-teenager-123746693.html"),
      new Article("RED", "39 Bodies Including One Teenager Found in Back of Semitrailer in Britain", "https://news.yahoo.com/39-bodies-including-one-teenager-123746693.html"),
    ];
}

  getBgColor(provider_code) {
    switch (provider_code) {
      case 'YHN':
        return 'rgba(76,0,200,.5)';
      case 'RED':
        return 'rgba(252,44,8,.5)'
    }
  }

  shortDisplay(text: String){
    if(text.length > 80){
      return text.substr(0,80) + '...'
    }
    return text
  }

}
