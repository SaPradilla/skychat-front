import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';

export const routes: Routes = [
    {
        path:'',
        component: LandingComponent,
    },{
        path:'register',
        component:RegisterComponent,
    },{
        path:'login',
        component:LoginComponent,
    },
];
