import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SentimentPieComponent } from './sentiment-pie.component';

describe('SentimentPieComponent', () => {
  let component: SentimentPieComponent;
  let fixture: ComponentFixture<SentimentPieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SentimentPieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SentimentPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
