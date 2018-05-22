import { MatTableDataSource } from '@angular/material';
import { Component, OnInit, Input } from '@angular/core';

import { System } from './../../../../system/system.model';

@Component({
  selector: 'app-dynamic-component',
  templateUrl: './log-grid.component.html',
  styles: []
})
export class LogGridComponent implements OnInit {
  @Input() dataSourceRecords;
  displayedColumns: Array<string> = ['name', 'status', 'type'];
  dataSource: MatTableDataSource<System> = new MatTableDataSource<System>();

  constructor() { }

  ngOnInit() {
      this.dataSource.data = this.dataSourceRecords;
  }
}
