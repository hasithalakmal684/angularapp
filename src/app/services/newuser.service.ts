import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import {User} from "../models/user";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import {Pin} from "../models/pin";
import {Newuser} from "../models/newuser";

@Injectable()
export class NewuserService {
  constructor(private http: Http) { }
  create(user: User) {
    //noinspection TypeScriptUnresolvedFunction
    console.log(user);
    return this.http.post('http://test.taptopark.tk/api/phone_number/send_code', user)
  };
  validate(pin: Pin) {
    //noinspection TypeScriptUnresolvedFunction
    console.log(pin)
    return this.http.post('http://test.taptopark.tk/api/phone_number/check_code', pin)
  };
  registerUser(newuser: Newuser) {
    //noinspection TypeScriptUnresolvedFunction
    console.log(newuser)
    return this.http.post('http://test.taptopark.tk/api/auth/signup', newuser)
  }
}
