import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StudentregistrationComponent } from './studentregistration/studentregistration.component';

export const routes: Routes = [
{
    path:'register',
    component:StudentregistrationComponent
},
{
    path:'',
    component:LoginComponent
}



];
