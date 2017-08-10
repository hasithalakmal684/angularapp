import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './signup/signup.component';
import { routing } from './app.routing';
import { HomeComponent } from './home/home.component';
import {NewuserService} from "./services/newuser.service";
import {HttpModule} from "@angular/http";
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './signup/register/register.component';
import {AuthService} from "./services/auth.service";
import {AuthGuard} from "./guard/auth.guard";
import { ErrorMsgComponent } from './directives/error-msg/error-msg.component';
import {LogcheckService} from "./services/logcheck.service";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    SignupComponent,
    HomeComponent,
    RegisterComponent,
    ErrorMsgComponent,

  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    FormsModule,
  ],
  providers: [NewuserService,AuthService,AuthGuard,LogcheckService],
  bootstrap: [AppComponent]
})
export class AppModule { }
