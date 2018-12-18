import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosEmployeeComponent } from './pos-employee.component';

describe('PosEmployeeComponent', () => {
  let component: PosEmployeeComponent;
  let fixture: ComponentFixture<PosEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
