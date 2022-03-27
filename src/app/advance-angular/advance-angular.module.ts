import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFactoryComponent } from './user-factory/user-factory.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewProviderComponent } from './view-provider/view-provider.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { AdvanceComponent } from './advance/advance.component';
export const TITLE = new InjectionToken<string>('app.title'); 

const routes: Routes = [
  {
    path: '',
    component: AdvanceComponent
  },
  {
    path: 'use-factory',
    component: UserFactoryComponent
  },
  {
    path: 'view-provider',
    component: ViewProviderComponent
  },
];


@NgModule({
  declarations: [
    UserFactoryComponent,
    ViewProviderComponent,
    DynamicComponent,
    AdvanceComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  providers:[
    { provide: TITLE, useValue: '' }
  ]
})
export class AdvanceAngularModule { }
