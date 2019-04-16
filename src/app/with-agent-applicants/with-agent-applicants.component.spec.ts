import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithAgentApplicantsComponent } from './with-agent-applicants.component';

describe('WithAgentApplicantsComponent', () => {
  let component: WithAgentApplicantsComponent;
  let fixture: ComponentFixture<WithAgentApplicantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithAgentApplicantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithAgentApplicantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
