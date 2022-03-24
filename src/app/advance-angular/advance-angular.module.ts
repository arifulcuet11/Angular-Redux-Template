import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFactoryComponent } from './user-factory/user-factory.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewProviderComponent } from './view-provider/view-provider.component';
const routes: Routes = [
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
    ViewProviderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class AdvanceAngularModule { }
