import { Component, OnInit } from '@angular/core';
import { MyProvider, MyProvider1 } from './provider-class';

@Component({
  selector: 'app-view-provider',
  templateUrl: './view-provider.component.html',
  styleUrls: ['./view-provider.component.scss'],
  viewProviders: [MyProvider, MyProvider1]
})
export class ViewProviderComponent implements OnInit {

  constructor(public obj: MyProvider,
    public obj1: MyProvider1) { 
      obj1.getString(' this is ariful islam');
      console.log(obj.VarMyProvider);
      console.log(obj1.VarMyProvider1);
    }

  ngOnInit(): void {
  }

}
