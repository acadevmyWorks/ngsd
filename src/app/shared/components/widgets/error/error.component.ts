import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-error-component',
  template: `
    <mat-icon>error_outline</mat-icon>
    <p>Errore durante il caricamento dinamico del componente</p>
  `,
  styles: []
})
export class ErrorComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
