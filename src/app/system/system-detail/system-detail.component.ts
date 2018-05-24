import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { System } from '../system.model';
import { IDynamicComponent } from '../../widget/dynamic-container/dynamicComponent.interface';

@Component({
  selector: 'app-system-detail',
  templateUrl: './system-detail.component.html',
  styleUrls: ['./system-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SystemDetailComponent implements OnInit {
  @Input() system: System;
  @Output() closedCard: EventEmitter<void> = new EventEmitter<void>();
  @Input() dynamicComponents: IDynamicComponent[];

  constructor() {}

  ngOnInit() {}

  onCloseCard() {
    this.closedCard.emit();
  }

  onSubmit(f) { }

}
