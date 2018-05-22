import { LogGridComponent } from './log/log-grid.component';
import { ErrorComponent } from './error/error.component';
import { AgmMapComponent } from './../agm-map/agm-map.component';
import { ChartComponent } from './charts/chart.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { Injectable } from '@angular/core';

@Injectable()
export class WidgetService {
    private mappings = {
        'chart': ChartComponent,
        'welcome': WelcomeComponent,
        'map': AgmMapComponent,
        'log-grid': LogGridComponent,
        'error': ErrorComponent
    };

    getComponentType(typeName: string) {
         const type = this.mappings[typeName];
         return type;
    }
}
