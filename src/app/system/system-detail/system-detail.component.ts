import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { System } from '../system.model';

@Component({
  selector: 'app-system-detail',
  templateUrl: './system-detail.component.html',
  styleUrls: ['./system-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SystemDetailComponent implements OnInit {
  @Input() system: System;
  @Output() closedCard: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  onCloseCard() {
    this.closedCard.emit();
  }

  onSubmit(f) { }

}
