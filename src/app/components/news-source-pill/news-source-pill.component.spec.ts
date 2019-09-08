import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsSourcePillComponent } from './news-source-pill.component';

describe('NewsSourcePillComponent', () => {
  let component: NewsSourcePillComponent;
  let fixture: ComponentFixture<NewsSourcePillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsSourcePillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsSourcePillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
