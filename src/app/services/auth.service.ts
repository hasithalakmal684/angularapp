import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Injectable()
export class AuthService {
  constructor(private http: Http) { }
  login(phone_number:string,password:string) {
    //noinspection TypeScriptUnresolvedFunction
      return this.http.post('http://test.taptopark.tk/api/auth/login', { phone_number: phone_number, password: password })
        .map((response: Response) => {
          // login successful if there's a jwt token in the response
          let user = response.json();
          if (user && user.token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
          }
          return user;
        });
  };
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
}
