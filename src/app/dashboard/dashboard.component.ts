import { Subscription } from 'rxjs';
import { DashboardService } from './dashboard.services';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  cardsSubscription: Subscription;
  onLoading = true;
  cards = [];

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.cardsSubscription = this.dashboardService.getCards()
    .subscribe(result => {
      this.onLoading = false;
      this.cards = result;
    });
  }

  ngOnDestroy() {
    this.cardsSubscription.unsubscribe();
  }
}
