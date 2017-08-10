import { Component, OnInit } from '@angular/core';
import {LogcheckService} from "../services/logcheck.service";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'pi-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public logcheck:LogcheckService,
              private Auth:AuthService
  ) {
    console.log(this.logcheck.logcheck());
  }
  isloged=this.logcheck.logcheck();
  ngOnInit() {
  };
  refresh(){
    window.location.reload();
  }
}
