import { IDynamicComponent } from './../widget/dynamic-container/dynamicComponent.interface';
import { MatTableDataSource } from '@angular/material';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { System } from './system.model';
import { Marker } from './../widget/components/agm-map/marker.model';
import { SystemService } from './system.service';

import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})
export class SystemComponent implements OnInit, OnDestroy {
  dataSource: MatTableDataSource<System> = new MatTableDataSource<System>();
  dataColumns: Array<string> = ['id', 'name', 'type', 'lat', 'long', 'status'];
  activeSystem?: System | undefined;
  dynamicComponents: IDynamicComponent[];
  markers: Marker[];
  systems$: Subscription;
  onLoading = true;

  constructor(public systemService: SystemService) {}

  ngOnInit() {
    // TODO: Add Filter on Observable
    this.systems$ = this.systemService.getAllSystems().subscribe(result => {
      this.dataSource.data = <System[]>result;
      this.markers = this.dataSource.data.map(system => ({lat: system.lat, long: system.long}));
      this.activeSystem = (this.activeSystem) ? <System>result.find(ex => ex.id === this.activeSystem.id) : undefined;
      this.onLoading = false;
    });
  }

  setActiveSystem(activeSystem: System | undefined) {
    this.activeSystem = activeSystem;
    this.dynamicComponents = this.systemService.getGraphs(activeSystem.id);
  }

  ngOnDestroy() {
    this.systems$.unsubscribe();
  }
}
