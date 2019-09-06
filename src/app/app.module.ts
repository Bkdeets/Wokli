import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TopicListComponent } from './components/topic-list/topic-list.component';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';
import { IntensityGaugeComponent } from './components/intensity-gauge/intensity-gauge.component';
import { NumberCircleComponent } from './components/number-circle/number-circle.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { SentimentPieComponent } from './components/sentiment-pie/sentiment-pie.component';
import { BubbleChartComponent } from './components/bubble-chart/bubble-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TopicListComponent,
    NewsFeedComponent,
    IntensityGaugeComponent,
    NumberCircleComponent,
    LineChartComponent,
    SentimentPieComponent,
    BubbleChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
