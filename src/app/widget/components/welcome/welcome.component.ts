import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-component',
  template: `
    <h2>Benvenuto nella tua Dashboard</h2>
    <p>Siamo felici che tu sia qui per questa demo, mio caro {{name}}</p>
  `,
  styles: []
})
export class WelcomeComponent implements OnInit {
  @Input() name?: any;

  constructor() { }

  ngOnInit() {
  }

}
