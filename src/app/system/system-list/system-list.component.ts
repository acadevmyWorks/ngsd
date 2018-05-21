import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Component, OnInit, ViewChild, AfterViewInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { System } from '../system.model';


@Component({
  selector: 'app-system-list',
  templateUrl: './system-list.component.html',
  styleUrls: ['./system-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SystemListComponent implements OnInit, AfterViewInit {
  @Input() dataSource: MatTableDataSource<System>;
  @Input() displayedColumns: Array<string>;

  @Output() clickedRow: EventEmitter<System> = new EventEmitter<System>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  doFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  onClickRow(row: System) {
    this.clickedRow.emit(row);
  }
}
