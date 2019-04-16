import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreMedComponent } from './pre-med.component';

describe('PreMedComponent', () => {
  let component: PreMedComponent;
  let fixture: ComponentFixture<PreMedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreMedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreMedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
