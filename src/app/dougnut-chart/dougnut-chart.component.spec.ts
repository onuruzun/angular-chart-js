import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DougnutChartComponent } from './dougnut-chart.component';

describe('DougnutChartComponent', () => {
  let component: DougnutChartComponent;
  let fixture: ComponentFixture<DougnutChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DougnutChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DougnutChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
