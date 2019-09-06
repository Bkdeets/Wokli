import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberCircleComponent } from './number-circle.component';

describe('NumberCircleComponent', () => {
  let component: NumberCircleComponent;
  let fixture: ComponentFixture<NumberCircleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberCircleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
