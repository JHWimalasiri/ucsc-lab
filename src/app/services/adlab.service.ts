import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpModule } from '@angular/http';
import{ Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {Lab} from './lab.model';


@Injectable({
  providedIn: 'root'
})
export class AdlabService {
  lab:any;
  labs: Lab[];

  constructor(private http: Http) { 
    console.log('adlab service init');
  }

  
}
