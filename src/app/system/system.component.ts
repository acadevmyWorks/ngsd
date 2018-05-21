import { System } from './system.model';
import { Component, OnInit } from '@angular/core';
import { SystemService } from './system.service';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})
export class SystemComponent implements OnInit {
  constructor(public systemService: SystemService) {}

  ngOnInit() {
  }

}
