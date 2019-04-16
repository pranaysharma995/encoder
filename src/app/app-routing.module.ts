import { NgModule } from '@angular/core';
import { Routes, RouterModule, ChildrenOutletContexts } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { HomeComponent } from './home/home.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ApplicantComponent } from './applicant/applicant.component';
import { AgentComponent } from './agent/agent.component';
import { PreMedComponent } from './pre-med/pre-med.component';
import { NonPreMedComponent } from './non-pre-med/non-pre-med.component';
import { AllApplicantsComponent } from './all-applicants/all-applicants.component';
import { AddApplicantComponent } from './add-applicant/add-applicant.component';
import { AllAgentsComponent } from './all-agents/all-agents.component';
import { SingleAgentComponent } from './single-agent/single-agent.component';
import { AgentDetailComponent } from './agent-detail/agent-detail.component';
import { AddAgentComponent } from './add-agent/add-agent.component';
import { ApplicantDetailComponent } from './applicant-detail/applicant-detail.component';
import { PersonalDetailComponent } from './personal-detail/personal-detail.component';
import { PreMedDetailComponent } from './pre-med-detail/pre-med-detail.component';
import { PassportDetailComponent } from './passport-detail/passport-detail.component';
import { RegistrationComponent } from './registration/registration.component';
import { MatchFoundComponent } from './match-found/match-found.component';
import { AddNewApplicantComponent } from './add-new-applicant/add-new-applicant.component';
import { NonePreMedListComponent } from './none-pre-med-list/none-pre-med-list.component';
import { ScheduleComponent } from './schedule/schedule.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'createAccount',
    component:CreateAccountComponent
  },
  {
    path:'forgetPassword',
    component:ForgetPasswordComponent
  },
  {
    path:'home',
    component:HomeComponent,
    children:[
      {
        path:'',
        component:EditProfileComponent
      },
      {
        path:'editProfile',
        component:EditProfileComponent
      },
      {
        path:'applicants',
        component:ApplicantComponent,
        children:[
          {
              path:'',
              component:AllApplicantsComponent
          },
          {
            path:'all',
            component:AllApplicantsComponent
          },
          {
            path:'detail',
            component:ApplicantDetailComponent,
            children:[
              {
                path:'',
                component:PersonalDetailComponent
              },
              {
                path:'personal',
                component:PersonalDetailComponent
              },
              {
                path:'preMed',
                component:PreMedDetailComponent
              },
              {
                path:'passport',
                component:PassportDetailComponent
              }
            ]
          },
          {
            path:'add',
            component:AddApplicantComponent,
            children:[
              {
                path:'',
                component:RegistrationComponent
              },
              {
                path:'registration',
                component:RegistrationComponent
              },
              {
                path:'matchFound',
                component:MatchFoundComponent
              },
              {
                path:'addNew',
                component:AddNewApplicantComponent
              }
            ]
          }
        ]
      },
      {
        path:'agents',
        component:AgentComponent,
        children:[
          {
            path:'',
            component:AllAgentsComponent
          },
          {
            path:'all',
            component:AllAgentsComponent
          },
          {
            path:'single',
            component:SingleAgentComponent
          },
          {
            path:'detail',
            component:AgentDetailComponent
          },
          {
            path:'add',
            component:AddAgentComponent
          }
        ]
      },
      {
        path:'preMed',
        component:PreMedComponent
      },
      {
        path:'nonePreMed',
        component:NonPreMedComponent,
        children:[
          {
            path:'',
            component:NonePreMedListComponent
          },
          {
            path:'list',
            component:NonePreMedListComponent
          },
          {
            path:'schedule',
            component:ScheduleComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
