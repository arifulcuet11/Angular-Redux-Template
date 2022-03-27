import { Component, Injector, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { TITLE } from '../advance-angular.module';
import { DynamicComponent } from '../dynamic/dynamic.component';

@Component({
  selector: 'app-advance',
  templateUrl: './advance.component.html',
  styleUrls: ['./advance.component.scss']
})
export class AdvanceComponent implements OnInit {

  dynamicCom = DynamicComponent;
  myInjector: Injector;
  @ViewChild('placeholder', { read: ViewContainerRef, static: true })
  public placeholder!: ViewContainerRef;
  myContent = [[document.createTextNode('Ahoj')], [document.createTextNode('Svet')]];
  constructor(injector: Injector) { 
    let title = 'My dynamic title works!';
    this.myInjector =  Injector.create({providers: [{provide: TITLE, useValue: title}], parent: injector});

    // this.myInjector =ReflectiveInjector.resolveAndCreate([{ provide: TITLE, useValue: title }], injector);;
  }

  ngOnInit(): void {
  }
  ngAfterViewInit() {

  }
}
