import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {Lab} from './lab.model';


@Injectable({
  providedIn: 'root'
})
export class AdlabService {
  lab: any;
  labs: Lab[];

  constructor(private http: Http) {
    console.log('adlab service init');
  }

  addLab(lab){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/labroute/savelab', lab, {headers: headers})
      .pipe(map(res => res.json()));
  }

  getLab(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/labroute/viewlab', {headers: headers})
      .pipe(map(res => res.json()));
  }

  searchLab(searchlab){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/labroute/searchlab', searchlab, {headers: headers})
      .pipe(map(res => res.json()));
  }
}
