import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ToolbarComponent } from './navigation/toolbar/toolbar.component';
import { SidenavListComponent } from './navigation/sidenav/sidenav-list.component';
import { SystemComponent } from './system/system.component';
import { SystemListComponent } from './system/system-list/system-list.component';
import { SystemDetailComponent } from './system/system-detail/system-detail.component';

import { AuthService } from './auth/auth.service';
import { SystemService } from './system/system.service';

import { ChartModule } from 'angular-highcharts';

import { ChartComponent } from './chart.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    ToolbarComponent,
    SidenavListComponent,
    SystemComponent,
    SystemListComponent,
    SystemDetailComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB8OyhC-scOhTz4-UaTImr3XyoQRXql-7A'
    }),
    ChartModule
  ],
  providers: [SystemService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
