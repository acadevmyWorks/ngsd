import { DashboardService } from './dashboard.services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  cards = [];

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.cards = this.dashboardService.getCards();
  }

}
