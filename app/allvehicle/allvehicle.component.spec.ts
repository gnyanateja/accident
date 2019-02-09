import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllvehicleComponent } from './allvehicle.component';

describe('AllvehicleComponent', () => {
  let component: AllvehicleComponent;
  let fixture: ComponentFixture<AllvehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllvehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllvehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
