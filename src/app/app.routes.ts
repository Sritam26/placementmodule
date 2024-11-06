import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { CoordinatorSignupComponent } from './coordinator-signup/coordinator-signup.component';
import { CoordinatorLoginComponent } from './coordinator-login/coordinator-login.component';
import { CoordinatorFormComponent } from './coordinator-form/coordinator-form.component';
import { StudentplacementLandingComponent } from './studentplacement-landing/studentplacement-landing.component';


export const routes: Routes = [
 // { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to login by default

  { path: 'studentdetails', component: StudentProfileComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'coordinatorsignup', component: CoordinatorSignupComponent },
  { path: 'coordinatorlogin', component: CoordinatorLoginComponent },
  //{ path: '**', redirectTo: '/login' },
  {path:"",component:LandingPageComponent},
  {path:"coordinatorform",component:CoordinatorFormComponent},
  {path:"studentplacementform", component:StudentplacementLandingComponent}
];
