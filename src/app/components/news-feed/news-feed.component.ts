import { DynamoWrapperService } from './../../services/dynamo-wrapper.service';
import { Component, OnInit, Input, OnChanges, AfterContentInit } from '@angular/core';
import { TopicListComponent } from '../topic-list/topic-list.component';

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
    let dash_height = document.getElementById('dashboard').offsetHeight;
    let news_feed = document.getElementById('news-feed')
    news_feed.style.maxHeight = String(dash_height*.25) + 'px';
    console.log(news_feed);
    console.log(dash_height);
  }

  openLink(url) {
    window.open(url, "_blank");
  }

  async loadArticles(){
    // let results = await this.wrapper.getTopArticles(5);
    // this.articles = [];
    // for (let res of results['response']['data']) {
    //   this.articles.push(
    //     {
    //       provider_code: res.provider_code.toUpperCase(),
    //       summary: res.headline,
    //       link: res.url
    //     }
    //   )
    // }
    this.articles = [
      {provider_code: "YHN", summary: "39 Bodies Including One Teenager Found in Back of Semitrailer in Britain", link: "https://news.yahoo.com/39-bodies-including-one-teenager-123746693.html"},
      {provider_code: "YHN", summary: "After El Paso and Odessa shootings, my plan to reduce mass violence: Sen. John Cornyn", link: "https://news.yahoo.com/el-paso-odessa-shootings-plan-152756756.html"},
      {provider_code: "YHN", summary: "ICE agent repeatedly raped and impregnated immigra…ars while threatening deportation, lawsuit claims", link: "https://news.yahoo.com/ice-agent-repeatedly-raped-impregnated-170954298.html"},
      {provider_code: "YHN", summary: "Former ICE Head Slams L.A. Police for Releasing Illegal Immigrants", link: "https://news.yahoo.com/former-ice-head-slams-l-191646900.html"},
      {provider_code: "YHN", summary: "Bernie Sanders rolled out his marijuana legalization plan at 4:20 p.m.", link: "https://news.yahoo.com/bernie-sanders-rolled-marijuana-legalization-212300320.html"},
      {provider_code: "YHN", summary: "39 Bodies Including One Teenager Found in Back of Semitrailer in Britain", link: "https://news.yahoo.com/39-bodies-including-one-teenager-123746693.html"},
      {provider_code: "YHN", summary: "After El Paso and Odessa shootings, my plan to reduce mass violence: Sen. John Cornyn", link: "https://news.yahoo.com/el-paso-odessa-shootings-plan-152756756.html"},
      {provider_code: "YHN", summary: "ICE agent repeatedly raped and impregnated immigra…ars while threatening deportation, lawsuit claims", link: "https://news.yahoo.com/ice-agent-repeatedly-raped-impregnated-170954298.html"},
      {provider_code: "YHN", summary: "Former ICE Head Slams L.A. Police for Releasing Illegal Immigrants", link: "https://news.yahoo.com/former-ice-head-slams-l-191646900.html"}
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

}
