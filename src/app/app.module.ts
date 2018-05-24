import { environment } from './../environments/environment';
import { AmChartComponent } from './shared/components/widgets/charts/amchart.component';
import { LogGridComponent } from './shared/components/widgets/log/log-grid.component';
import { ErrorComponent } from './shared/components/widgets/error/error.component';
import { WidgetService } from './shared/components/widgets/widget.service';
import { DashboardService } from './dashboard/dashboard.services';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';


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
import { AgmMapComponent } from './shared/components/agm-map/agm-map.component';

import { AuthService } from './auth/auth.service';
import { SystemService } from './system/system.service';

import { ChartModule } from 'angular-highcharts';

import { DynamicContainerComponent } from './shared/components/dynamic-container/dynamic-container.component';
import { WelcomeComponent } from './shared/components/widgets/welcome/welcome.component';
import { ChartComponent } from './shared/components/widgets/charts/chart.component';

import { AmChartsModule } from '@amcharts/amcharts3-angular';

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
    ChartComponent,
    AgmMapComponent,
    DynamicContainerComponent,
    WelcomeComponent,
    ErrorComponent,
    LogGridComponent,
    AmChartComponent
  ],
  entryComponents: [
    WelcomeComponent,
    ChartComponent,
    ErrorComponent,
    LogGridComponent,
    AmChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    AmChartsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB8OyhC-scOhTz4-UaTImr3XyoQRXql-7A'
    }),
    ChartModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [SystemService, DashboardService, WidgetService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
