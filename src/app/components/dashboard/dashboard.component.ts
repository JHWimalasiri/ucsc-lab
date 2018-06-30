import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap';
import { AdlabService } from '../../services/adlab.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [AdlabService]
})
export class DashboardComponent implements OnInit {
  datePickerConfig: Partial<BsDatepickerConfig>;
  mstep = 30;
  time1: String;
  // minTime:Date = new Date();
  // maxTime:Date = new Date();


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
  }

  OnLabSubmit(){
    const lab = {
      
    }
  }

}
