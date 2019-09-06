import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntensityGaugeComponent } from './intensity-gauge.component';

describe('IntensityGaugeComponent', () => {
  let component: IntensityGaugeComponent;
  let fixture: ComponentFixture<IntensityGaugeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntensityGaugeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntensityGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
