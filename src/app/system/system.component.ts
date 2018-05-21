import { System } from './system.model';
import { SystemService } from './system.service';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})
export class SystemComponent implements OnInit, AfterViewInit {
  isSelectedRow = false;
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
    console.log(row);
    this.isSelectedRow = !this.isSelectedRow;
  }

  onCloseCard() {
    this.isSelectedRow = false;
  }

  onSubmit(f) {

  }
}
