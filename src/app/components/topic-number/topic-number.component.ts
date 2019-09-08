import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-topic-number',
  templateUrl: './topic-number.component.html',
  styleUrls: ['./topic-number.component.scss']
})
export class TopicNumberComponent implements OnInit {
  @Input() number: number;

  bgColors = [
    "bg-blue-500",
    "bg-blue-300",
    "bg-blue-100",
    "bg-green-500",
    "bg-green-300",
    "bg-green-100",
    "bg-yellow-500",
    "bg-yellow-300",
    "bg-yellow-100",
    "bg-red-500"
  ];

  constructor() { }

  ngOnInit() {
  }

  setColor(){
    document.getElementById(String(this.number)+'number').classList.add(this.bgColors[this.number-1]);
  }
}
