import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.scss']
})
export class TopicListComponent implements OnInit {

  topics = [
    'Hurricane Dorian',
    'Diving Boat Fire',
    'Hurricane Season',
    'Trump Tweet',
    'Brexit',
    'Yield Curve Inversion',
    '2020 Olympics',
    '2020 Election',
    'Viral Vidoe',
    'Meme'
  ]

  constructor() { }

  ngOnInit() {
  }

}
