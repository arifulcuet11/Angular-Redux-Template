import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book/book.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'books',
    loadChildren: () => import('./book/book.module').then(m => m.BookModule)
  },
  {
    path: 'advance',
    loadChildren: () => import('./advance-angular/advance-angular.module').then(m => m.AdvanceAngularModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
