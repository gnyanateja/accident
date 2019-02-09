import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllstreetComponent } from './allstreet.component';

describe('AllstreetComponent', () => {
  let component: AllstreetComponent;
  let fixture: ComponentFixture<AllstreetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllstreetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllstreetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
