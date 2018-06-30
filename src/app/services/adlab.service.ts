import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpModule } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdlabService {
  lab:any;

  constructor(private http: Http) { 
    console.log('adlab service init');
  }

  
}
