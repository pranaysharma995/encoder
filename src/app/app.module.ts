import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { HomeComponent } from './home/home.component';
import { ApplicantComponent } from './applicant/applicant.component';
import { AgentComponent } from './agent/agent.component';
import { PreMedComponent } from './pre-med/pre-med.component';
import { NonPreMedComponent } from './non-pre-med/non-pre-med.component';
import { AllApplicantsComponent } from './all-applicants/all-applicants.component';
import { WalkingApplicantsComponent } from './walking-applicants/walking-applicants.component';
import { WithAgentApplicantsComponent } from './with-agent-applicants/with-agent-applicants.component';
import { AddApplicantComponent } from './add-applicant/add-applicant.component';
import { ApplicantDetailComponent } from './applicant-detail/applicant-detail.component';
import { PersonalDetailComponent } from './personal-detail/personal-detail.component';
import { PreMedDetailComponent } from './pre-med-detail/pre-med-detail.component';
import { PassportDetailComponent } from './passport-detail/passport-detail.component';
import { AllAgentsComponent } from './all-agents/all-agents.component';
import { SingleAgentComponent } from './single-agent/single-agent.component';
import { AgentDetailComponent } from './agent-detail/agent-detail.component';
import { AddAgentComponent } from './add-agent/add-agent.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { RegistrationComponent } from './registration/registration.component';
import { MatchFoundComponent } from './match-found/match-found.component';
import { AddNewApplicantComponent } from './add-new-applicant/add-new-applicant.component';
import { NonePreMedListComponent } from './none-pre-med-list/none-pre-med-list.component';
import { ScheduleComponent } from './schedule/schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateAccountComponent,
    ForgetPasswordComponent,
    HomeComponent,
    ApplicantComponent,
    AgentComponent,
    PreMedComponent,
    NonPreMedComponent,
    AllApplicantsComponent,
    WalkingApplicantsComponent,
    WithAgentApplicantsComponent,
    AddApplicantComponent,
    ApplicantDetailComponent,
    PersonalDetailComponent,
    PreMedDetailComponent,
    PassportDetailComponent,
    AllAgentsComponent,
    SingleAgentComponent,
    AgentDetailComponent,
    AddAgentComponent,
    EditProfileComponent,
    RegistrationComponent,
    MatchFoundComponent,
    AddNewApplicantComponent,
    NonePreMedListComponent,
    ScheduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
