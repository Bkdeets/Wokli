import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicNumberComponent } from './topic-number.component';

describe('TopicNumberComponent', () => {
  let component: TopicNumberComponent;
  let fixture: ComponentFixture<TopicNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
