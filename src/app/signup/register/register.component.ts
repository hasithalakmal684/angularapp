import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {NewuserService} from "../../services/newuser.service";

@Component({
  selector: 'pi-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  modele:any = {};
  constructor(private router: Router,private userCreation:NewuserService) { }

  ngOnInit() {
  };
  register(){
    this.userCreation.registerUser(this.modele)
        .subscribe(
            data => {
              console.log(data);
            },
            error => {
              console.log(error._body);
            },
            ()=> console.log("Finished")
        );
  };

}
