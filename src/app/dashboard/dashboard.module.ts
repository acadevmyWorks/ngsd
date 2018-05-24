import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';
import { DashboardService } from './dashboard.services';

import { WidgetModule } from '../widget/widget.module';

@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [
        WidgetModule,
        SharedModule,
        DashboardRoutingModule
    ],
    exports: [
        DashboardComponent
    ],
    providers: [
        DashboardService
    ]
})
export class AppDashboardModule {}
