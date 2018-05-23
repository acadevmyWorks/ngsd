import { IDynamicComponent } from './../shared/components/dynamic-container/dynamicComponent.interface';
import { MatTableDataSource } from '@angular/material';
import { Component, OnInit } from '@angular/core';

import { System } from './system.model';
import { Marker } from './../shared/components/agm-map/marker.model';
import { SystemService } from './system.service';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})
export class SystemComponent implements OnInit {
  dataSource: MatTableDataSource<System> = new MatTableDataSource<System>();
  dataColumns: Array<string> = ['id', 'name', 'type', 'lat', 'long', 'status'];
  activeSystem?: System;
  dynamicComponents: IDynamicComponent[];
  markers: Marker[];

  constructor(public systemService: SystemService) {}

  ngOnInit() {
    this.dataSource.data = this.systemService.getAllSystems();
    this.markers = this.dataSource.data.map(system =>  ({lat: system.lat, long: system.long}));
  }

  setActiveSystem(activeSystem: System | undefined) {
    this.activeSystem = activeSystem;
    this.dynamicComponents = this.systemService.getGraphs(activeSystem.id);
  }
}
