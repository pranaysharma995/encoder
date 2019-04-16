import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonPreMedComponent } from './non-pre-med.component';

describe('NonPreMedComponent', () => {
  let component: NonPreMedComponent;
  let fixture: ComponentFixture<NonPreMedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonPreMedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonPreMedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
