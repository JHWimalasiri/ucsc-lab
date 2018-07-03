import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';


import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {HomeComponent} from './components/home/home.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ProfileComponent} from './components/profile/profile.component';

import {ValidateService} from './services/validate.service';
import {AuthService} from './services/auth.service';
import {FlashMessagesModule} from 'angular2-flash-messages';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {AdlabService} from './services/adlab.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { LabComponent } from './components/lab/lab.component';
import { AddLabComponent } from './components/add-lab/add-lab.component';




const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'lab', component: LabComponent},
  {path: 'add-lab', component: AddLabComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    LabComponent,
    AddLabComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot(),
    NgbModule.forRoot(),
    BrowserAnimationsModule, 
    CalendarModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot()
  ],
  providers: [ValidateService, AuthService, AdlabService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
