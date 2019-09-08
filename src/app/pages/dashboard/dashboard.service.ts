import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  selectedTopic: String;

  constructor() { }

  setSelectedTopic(topic: String){
    this.selectedTopic = topic;
  }
}
