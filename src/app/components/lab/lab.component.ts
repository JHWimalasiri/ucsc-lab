import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap';
import { AdlabService } from '../../services/adlab.service';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';
import {FlashMessagesService} from 'angular2-flash-messages';
import {ValidateService} from '../../services/validate.service'

import {LabName} from '../dashboard/labname';
import { Time } from 'ngx-bootstrap/timepicker/timepicker.models';

@Component({
  selector: 'app-lab',
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.css']
})
export class LabComponent implements OnInit {
  datePickerConfig: Partial<BsDatepickerConfig>;
  mstep = 60;
  time1: Date;

  lab: LabName[];
  time2: String;
  time3: String;
  date2: String;
  event: String;
  labs: String;

  constructor(
    private flashMessage: FlashMessagesService,
    private validateService: ValidateService,
    private adlabService: AdlabService) {
    this.datePickerConfig = Object.assign({},{
      containerClass:'theme-dark-blue',
      showWeekNumbers:false,
      dateInputFormat:'DD/MM/YYYY'
    });
    // this.minTime.setHours(8);
    // this.minTime.setMinutes(0);
    // this.maxTime.setHours(18);
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

  onLabSubmit() {
    const lab = {
      lab: this.labs,
      fromtime: parseInt(this.convertToTime(this.time2), 10),
      totime: parseInt(this.convertToTime(this.time3), 10),
      date: this.convert(this.date2),
      event: this.event
    }
    console.log(lab);

    // Required Fields
    if(!this.validateService.validateLab(lab)) {
      this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
      // console.log('Please fill in all fields');
      return false;
    }

    if(!this.validateService.validateTime(lab)) {
      this.flashMessage.show('Invalid time period', {cssClass: 'alert-danger', timeout: 3000});
      // console.log('Please fill in all fields');
      return false;
    }

    this.adlabService.addLab(lab).subscribe(data => {
      if (data.success) {
        this.flashMessage.show('Lab reservation successful', {cssClass: 'alert-success', timeout: 3000});
      } else {
        this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
      }
    });
  }

  convert(str) {
    var date = new Date(str),
        mnth = ("0" + (date.getMonth()+1)).slice(-2),
        day  = ("0" + date.getDate()).slice(-2);
    return [ date.getFullYear(), mnth, day ].join("-");
}

convertToTime(str) {
   var minutes:String;
  var date = new Date(str),
      hours  = ("0" + date.getHours()).slice(-2);
      minutes = ("0" + date.getMinutes()).slice(-2);

        return [hours, minutes ].join("");

}

}
