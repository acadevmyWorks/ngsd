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

  dynamicComponents: IDynamicComponent[];
  markers: Marker[];

  systems$: Subscription;
  markers$: Subscription;
  // activeSystem$: Subscription;
  activeSystem$: Observable<System>;

  onLoading = true;

  constructor(public systemService: SystemService) {}

  ngOnInit() {
      // TODO: Reactive onLoading
      this.systems$ = this.systemService.availableSystems.subscribe(systems => {
        this.dataSource.data = systems;
        this.onLoading = false;
      });
      this.markers$ = this.systemService.systemMarkers.subscribe(markers => {
        this.markers = markers;
      });
      /*this.activeSystem$ = this.systemService.activatedSystemObservable.subscribe(system => {
        this.activeSystem = system;
      });*/
      this.activeSystem$ = this.systemService.activatedSystemObservable;
      this.systemService.getAllSystems();

  }

  setActiveSystem(activeSystem: System | undefined) {
    this.systemService.setActiveSystem(activeSystem);
    this.dynamicComponents = this.systemService.getGraphs(activeSystem);
  }

  ngOnDestroy() {
    this.systems$.unsubscribe();
    this.markers$.unsubscribe();
    // this.activeSystem$.unsubscribe();
  }
}
