import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonePreMedListComponent } from './none-pre-med-list.component';

describe('NonePreMedListComponent', () => {
  let component: NonePreMedListComponent;
  let fixture: ComponentFixture<NonePreMedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonePreMedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonePreMedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
