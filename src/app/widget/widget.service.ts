import { AmChartComponent } from './components/charts/amchart.component';
import { LogGridComponent } from './components/log/log-grid.component';
import { ErrorComponent } from './components/error/error.component';
import { AgmMapComponent } from './components/agm-map/agm-map.component';
import { ChartComponent } from './components/charts/chart.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

import { Injectable } from '@angular/core';

@Injectable()
export class WidgetService {
    private mappings = {
        'chart': ChartComponent,
        'amchart': AmChartComponent,
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
