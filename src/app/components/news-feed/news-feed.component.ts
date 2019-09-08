import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss']
})
export class NewsFeedComponent implements OnInit {
  articles = [
    'Bahamas Destroyed - "The storm was category 5 when it made la..."',
    '"Dorian makes landfall in Abaco Island"',
    'NC/SC/GA Prepare for Dorian - "The southeastern United States ..."',
    '8:00AM Update Discussion - "Hurricane Dorian has been downgr..."'
  ]
  constructor() { }

  ngOnInit() {
  }

}
