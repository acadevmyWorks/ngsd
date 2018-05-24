import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from './../../environments/environment';

import { AgmCoreModule } from '@agm/core';
import { ChartModule } from 'angular-highcharts';
import { AmChartsModule } from '@amcharts/amcharts3-angular';

import { SharedModule } from './../shared/shared.module';

import { WidgetService } from './widget.service';

import { DynamicContainerComponent } from './dynamic-container/dynamic-container.component';
import { AmChartComponent } from './components/charts/amchart.component';
import { LogGridComponent } from './components/log/log-grid.component';
import { ErrorComponent } from './components/error/error.component';
import { ChartComponent } from './components/charts/chart.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AgmMapComponent } from './components/agm-map/agm-map.component';

@NgModule({
    declarations: [
        DynamicContainerComponent,
        AgmMapComponent,
        WelcomeComponent,
        ChartComponent,
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
        CommonModule,
        SharedModule,
        AgmCoreModule.forRoot({
            apiKey: environment.agm
        }),
        AmChartsModule,
        ChartModule
    ],
    exports: [
        DynamicContainerComponent,
        AgmMapComponent,
        WelcomeComponent,
        ChartComponent,
        ErrorComponent,
        LogGridComponent,
        AmChartComponent
    ],
    providers: [
        WidgetService
    ]
  })
export class WidgetModule {}
