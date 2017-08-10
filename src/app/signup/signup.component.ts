import { Component, OnInit } from '@angular/core';
import {NewuserService} from "../services/newuser.service";
import { Router } from '@angular/router';
import { Response } from '@angular/http';

@Component({
  selector: 'pi-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  modele:any = {};
    show=1;
    constructor(private router: Router, private userCreation:NewuserService) { }
    alert:string;
  ngOnInit() {
  }
  add(){
    this.userCreation.create(this.modele)
        .subscribe(
            data => {
              console.log(data);
                this.alert="";
                this.show=0;
            },
            error => {
                let a= error.json()
              console.log(a);
                switch (a.error.code){
                    case "23000": this.alert="Please enter a phone number";break;
                    case 21211: this.alert="Please enter a valid phone number";break;
                    case 21614: this.alert="Entered number is not a mobile number.";break;
                    case 21608: this.alert="Entered number is not a verified phone number.";break;
                };
            },
            ()=> console.log("Finished")
        );
  };
    validate(){
        this.userCreation.validate(this.modele)
            .subscribe(
                data => {
                    let a= data.json()
                    if (a.success==true){
                        this.alert="";
                        this.router.navigate(['/register']);
                    }else{
                        console.log(a);
                    }
                },
                error => {
                    let a= error.json();
                    if(error.status==500){
                        this.alert="Please enter the valid PIN number";
                    }else if(error.status==404){
                        this.alert="Phone number is not valid";
                    }
                    console.log(a);
                },
                ()=> console.log("Finished")
            );

    }

}
