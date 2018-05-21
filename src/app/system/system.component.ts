import { System } from './system.model';
import { Component, OnInit, ViewChild, AfterViewInit, AfterViewChecked } from '@angular/core';
import { SystemService } from './system.service';
import { GoogleMapsAPIWrapper, AgmMap, LatLngBounds, LatLngBoundsLiteral} from '@agm/core';

declare var google: any;

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})
export class SystemComponent implements OnInit, AfterViewChecked {
  @ViewChild('AgmMap') agmMap: AgmMap;

  constructor(public systemService: SystemService) {}

  ngOnInit() {
  }

  ngAfterViewChecked() {
    console.log(this.agmMap);
    this.agmMap.mapReady.subscribe(map => {
      const bounds: LatLngBounds = new google.maps.LatLngBounds();
      for (const mm of this.systemService.getAllSystems()) {
        bounds.extend(new google.maps.LatLng(mm.lat, mm.long));
      }
      map.fitBounds(bounds);
    });
  }

}
