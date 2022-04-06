import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { ShareModule } from '../share/share.module';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'books',
    loadChildren: () => import('../book/book.module').then(m => m.BookModule)
  },
  {
    path: 'advance',
    loadChildren: () => import('../advance-angular/advance-angular.module').then(m => m.AdvanceAngularModule)
  }
];

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ShareModule
  ]
})
export class DashboardModule { }
