import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CandidatesComponent } from './candidates/candidates.component';
import { ElectionComponent } from './elect/elect.component';
import { LoginComponent } from './login/login.component';
import { PositionsComponent } from './positions/positions.component';
import { RegisterComponent } from './register/register.component';
import { ResultComponent } from './result/result.component';
import { VoteComponent } from './vote/vote.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    CandidatesComponent,
    PositionsComponent,
    VoteComponent,
    ElectionComponent,
    ResultComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: "",
        component: LoginComponent,
      },
      {
        path: "user-login",
        component: LoginComponent
      },
          {
            path: 'user-register',
            component: RegisterComponent
          },
          {
            path: 'user-candidates',
            component: CandidatesComponent
          },
          {
            path: 'user-positions',
            component: PositionsComponent
          },
          {
            path: 'user-vote',
            component: VoteComponent},
          {
            path: 'user-elect',
            component: ElectionComponent
          },
          {
            path: 'user-result',
            component: ResultComponent
          }
        ])
  ]
})
export class UserModule { }
