import {Component, OnInit} from '@angular/core';
import {BsDatepickerConfig} from 'ngx-bootstrap/datepicker';
import {AdlabService} from '../../services/adlab.service';

import {LabName} from './labname';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [AdlabService]
})
export class DashboardComponent implements OnInit {
  datePickerConfig: Partial<BsDatepickerConfig>;
  mstep = 60;
  time1: Date;
  // minTime:Date = new Date();
  // maxTime:Date = new Date();

  lab: LabName[];
  time2: String;
  time3: String;
  date2: String;
  event: String;
  labs: String;
  date1: String;

  data: any[] = []; //for getlab
  data1: any[] = [];





  constructor(private adlabService: AdlabService) {
    this.datePickerConfig = Object.assign({}, {
      containerClass: 'theme-dark-blue',
      showWeekNumbers: false,
      dateInputFormat: 'DD/MM/YYYY'
    });
    // this.minTime.setHours(8);
    // this.minTime.setMinutes(0);
    // this.maxTime.setHours(20);
    // this.maxTime.setMinutes(0);
   }

  ngOnInit() {
    this.lab = [
      {id: 1, name: 'Lab A'},
      {id: 2, name: 'Lab B'},
      {id: 3, name: 'Lab C'},
      {id: 4, name: 'Lab D'},
      {id: 4, name: 'Lab E'}
    ];

    // this.searchLab();
  }

  // onLabSubmit() {
  //   const lab = {
  //     lab: this.labs,
  //     fromtime: parseInt(this.convertToTime(this.time2), 10),
  //     totime: parseInt(this.convertToTime(this.time3), 10),
  //     date: this.convert(this.date2),
  //     event: this.event
  //   };
  //   console.log(lab);
  // }

  convert(str) {
    let date = new Date(str),
        mnth = ('0' + (date.getMonth() + 1)).slice(-2),
        day  = ('0' + date.getDate()).slice(-2);
    return [ date.getFullYear(), mnth, day ].join('-');
}

convertToTime(str) {
   let minutes: String;
  let date = new Date(str),
      hours  = ('0' + date.getHours()).slice(-2);
      minutes = ('0' + date.getMinutes()).slice(-2);

        return [hours, minutes ].join('');

}

searchLab() {
  const searchlab = {
    date: this.convert(this.date1),
    lab: this.labs
  };
  console.log(searchlab);

  this.adlabService.searchLab(searchlab).subscribe(res => {
    this.data = res.Reservation_details;
  });
}

searchTime() {
    const getlab = {
      date : this.convert(this.date2),
      fromtime : parseInt(this.convertToTime(this.time2), 10),
      totime : parseInt(this.convertToTime(this.time3), 10)
    };
    console.log(getlab);
  this.adlabService.getLab(getlab).subscribe(res => {
    this.data1 = res.Reservation_details;
  });
}



}
