import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap';
import { AdlabService } from '../../services/adlab.service';
import { Router } from '@angular/router';

import {LabName} from './labname';
import { Time } from 'ngx-bootstrap/timepicker/timepicker.models';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [AdlabService]
})
export class DashboardComponent implements OnInit {
  datePickerConfig: Partial<BsDatepickerConfig>;
  mstep = 30;
  time1: Date;
  // minTime:Date = new Date();
  // maxTime:Date = new Date();

  lab: LabName[];
  time2: Date;
  time3: String;
  date2: String;
  event: String;
  labs: String;


  



  constructor(private adlabService: AdlabService) {
    this.datePickerConfig = Object.assign({},{
      containerClass:'theme-dark-blue', 
      showWeekNumbers:false,
      dateInputFormat:'DD/MM/YYYY'
    });
    // this.minTime.setHours(8);
    // this.minTime.setMinutes(0);
    // this.maxTime.setHours(20);
    // this.maxTime.setMinutes(0);
   }

  ngOnInit() {
    this.lab = [
      {id:1,name:"Lab A"},
      {id:2,name:"Lab B"},
      {id:3,name:"Lab C"},
      {id:4,name:"Lab D"},
      {id:4,name:"Lab E"}
    ];
  }

  onLabSubmit(){
    const lab = {
      lab:this.labs,
      fromtime:this.time2.getTime,
      totime:this.time3,
      date:this.date2,
      event:this.event
    }
    console.log(lab);
  }

}
