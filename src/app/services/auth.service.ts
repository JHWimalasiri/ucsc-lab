import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpModule } from '@angular/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;

  constructor(private http: Http) { }

  registerUser(user) {
   let headers = new Headers();
   headers.append('Content-Type', 'application/json');
   return this.http.post('http://localhost:3000/users/register', user, {headers: headers})
    .pipe(map(res => res.json()));
 }

 authenticateUser(user) {
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.post('http://localhost:3000/users/authenticate', user, {headers: headers})
   .pipe(map(res => res.json()));
}



storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn(){

    if (localStorage.id_token == undefined ){
    //  console.log('Hello');
     return false
    } else {
    // console.log('Goodbye');
 
    const helper = new JwtHelperService();
    // console.log(helper.isTokenExpired(localStorage.id_token));  
    return !helper.isTokenExpired(localStorage.id_token);
      }
  } 
 

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
