import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { SystemService } from './../system.service';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { System } from '../system.model';


@Component({
  selector: 'app-system-list',
  templateUrl: './system-list.component.html',
  styleUrls: ['./system-list.component.css']
})
export class SystemListComponent implements OnInit, AfterViewInit {
  displayedColumns = ['id', 'name', 'type', 'lat', 'long', 'status'];
  dataSource = new MatTableDataSource<System>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private systemService: SystemService) {}

  ngOnInit() {
    this.dataSource.data = this.systemService.getAllSystems();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  doFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  onClickRow(row) {
    this.systemService.selectActiveSystem(row);
  }

}
