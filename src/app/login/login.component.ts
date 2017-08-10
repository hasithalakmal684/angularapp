import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {LogcheckService} from "../services/logcheck.service";


@Component({
  selector: 'pi-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    alert:string;
  model: any = {};
  returnUrl: string;

  constructor(        private route: ActivatedRoute,
                      private router: Router,
                      private authenticationService: AuthService,
                      public logcheck:LogcheckService) {

  }
  ngOnInit() {
    this.returnUrl = '/';
    this.authenticationService.logout();
  }

  login() {
    this.authenticationService.login(this.model.phone_num, this.model.password)
        .subscribe(
            data => {
                this.router.navigate(['/home']);
                window.location.reload();
                this.alert="Loged in";
                console.log(this.logcheck.logcheck());
            },
            error => {
              console.log(error)
                if(error.status==403){
                    this.alert="Incorrect phone number or password .";
                }
            });
  }
}
