import { Injectable } from '@angular/core';

@Injectable()
export class LogcheckService {
  constructor() { }
  logcheck(){
    if (localStorage.getItem('currentUser')) {
      return true;
    }
    return false;
  }
}
