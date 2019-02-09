import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllpoliceComponent } from './allpolice.component';

describe('AllpoliceComponent', () => {
  let component: AllpoliceComponent;
  let fixture: ComponentFixture<AllpoliceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllpoliceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllpoliceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
