import { NgModule, Component } from '@angular/core';
import { CommonModule, formatNumber } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CandidatesComponent } from './candidates/candidates.component';
import { PositionsComponent } from './positions/positions.component';
import { AppComponent } from '../app.component';
import { FormsModule,FormControl,FormControlName,FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';





@NgModule({
  declarations: [
    CandidatesComponent,
    PositionsComponent,
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
        path: "admin-login",
        component: LoginComponent
      },
      {
        path: 'admin-candidates',
        component: CandidatesComponent
      },
      {
        path: 'admin-positions',
        component: PositionsComponent
      }
    ])
  ]})




export class HomeModule { }
