import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  validateRegister(user) {
    if(user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
        return false;
    } else {
      return true;
    }
  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  validateLab(lab){
    if(lab.lab == undefined || lab.fromtime == undefined || lab.totime == undefined || lab.date == undefined || lab.event == undefined){
      return false;
    }
    else{
      return true;
    }
  }

  validateTime(lab){
    if(lab.totime<lab.fromtime || lab.totime==lab.fromtime){
      return false;
    }
    else{
      return true;
    }
  }

  validateSearchLab(searchlab){
    if(searchlab.date == undefined || searchlab.lab == undefined){
      return false;
    }
    else{
      return true;
    }
  }

  validateSearchTime(getlab){
    if(getlab.date == undefined || getlab.fromtime == undefined || getlab.totime == undefined){
      return false;
    }
    else{
      return true;
    }
  }
}
