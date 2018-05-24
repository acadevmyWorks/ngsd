import { Component, OnInit, Input, OnDestroy, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentRef } from '@angular/core';

import { WidgetService } from './../widget.service';
import { IDynamicComponent } from './dynamicComponent.interface';

@Component({
  selector: 'app-dynamic-container',
  template: `<div #dynamicContainer></div>`,
  styles: []
})
export class DynamicContainerComponent implements OnInit, OnDestroy {
  @ViewChild('dynamicContainer', {read: ViewContainerRef}) dynamicContainer: ViewContainerRef;
  @Input() dynamicComponent: IDynamicComponent;

  componentRef: ComponentRef<any>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private widgetService: WidgetService) { }

  ngOnInit() {
    this.dynamicContainer.clear();
    let componentType = this.widgetService.getComponentType(this.dynamicComponent.type);
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);

    // tslint:disable-next-line:max-line-length
    if (this.dynamicComponent.data && !componentFactory.inputs.every(element => this.dynamicComponent.data.hasOwnProperty(element.propName))) {
      componentType = this.widgetService.getComponentType('error');
      componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
    }

    const componentRef = this.dynamicContainer.createComponent(componentFactory);
    const componentInstance = <IDynamicComponent>componentRef.instance;
    componentFactory.inputs.forEach(element => {
      componentInstance[element.propName] = this.dynamicComponent.data[element.propName];
    });
  }

  ngOnDestroy() {
    // this.componentRef.destroy();
  }

}
