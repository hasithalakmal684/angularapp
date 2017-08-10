import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";
import {HomeComponent} from "./home/home.component";
import {RegisterComponent} from "./signup/register/register.component";
import {AuthGuard} from "./guard/auth.guard";

const appRoutes:Routes= <Routes>[
    {path: '', redirectTo:'/login',pathMatch:'full'},
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
    {path: 'register', component: RegisterComponent},
    //any other link redirect to home
    { path: '**', redirectTo: '/login' }
];
export const routing = RouterModule.forRoot(appRoutes);