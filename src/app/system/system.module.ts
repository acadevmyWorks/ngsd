import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';

import { SystemComponent } from './system.component';
import { SystemListComponent } from './system-list/system-list.component';
import { SystemDetailComponent } from './system-detail/system-detail.component';


import { SystemRoutingModule } from './system-routing.module';
import { SystemService } from './system.service';
import { WidgetModule } from '../widget/widget.module';

@NgModule({
    declarations: [
        SystemComponent,
        SystemListComponent,
        SystemDetailComponent
    ],
    imports: [
        WidgetModule,
        SharedModule,
        SystemRoutingModule
    ],
    providers: [
        SystemService
    ]
})
export class AppSystemModule {}
