import { SystemService } from './../system.service';
import { Component, OnInit } from '@angular/core';
import { System } from '../system.model';

@Component({
  selector: 'app-system-detail',
  templateUrl: './system-detail.component.html',
  styleUrls: ['./system-detail.component.css']
})
export class SystemDetailComponent implements OnInit {
  system: System;

  constructor(private systemService: SystemService) {}

  ngOnInit() {
    this.system = this.systemService.selectedRow;
   }

  onCloseCard() {
    this.systemService.deselectActiveSystem();
  }

  onSubmit(f) { }

}
