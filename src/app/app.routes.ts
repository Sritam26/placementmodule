import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { StudentregistrationComponent } from './studentregistration.component';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { LandingPageComponent } from './landing-page/landing-page.component';


export const routes: Routes = [
  { path: 'register', component: StudentregistrationComponent },
  { path: 'signin', component: StudentloginComponent },
  { path: '', component: LandingPageComponent },
];
