import { Component, Input, ViewChild, AfterViewChecked, ChangeDetectionStrategy } from '@angular/core';
import { GoogleMapsAPIWrapper, AgmMap, LatLngBounds, LatLngBoundsLiteral} from '@agm/core';

declare var google: any;

import { Marker } from './marker.model';

@Component({
    selector: 'app-agm-map',
    templateUrl: './agm-map.component.html',
    styleUrls: [
      './agm-map.component.css'
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AgmMapComponent implements AfterViewChecked {
    @ViewChild('AgmMap') agmMap: AgmMap;
    @Input() markers: Marker[];

    ngAfterViewChecked() {
        if (this.markers && this.markers.length > 1) {
          this.agmMap.mapReady.subscribe(map => {
            const bounds: LatLngBounds = new google.maps.LatLngBounds();
            for (const mm of this.markers) {
              bounds.extend(new google.maps.LatLng(mm.lat, mm.long));
            }
            map.fitBounds(bounds);
          });
        }
      }
}
