import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingEmployeeComponent } from './rating-employee.component';

describe('RatingEmployeeComponent', () => {
  let component: RatingEmployeeComponent;
  let fixture: ComponentFixture<RatingEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
