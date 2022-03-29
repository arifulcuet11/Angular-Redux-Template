import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFactoryComponent } from './user-factory/user-factory.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewProviderComponent } from './view-provider/view-provider.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { AdvanceComponent } from './advance/advance.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';
export const TITLE = new InjectionToken<string>('app.title'); 

// export function HttpLoaderFactory(http: HttpClient):MultiTranslateHttpLoader {
//   return new MultiTranslateHttpLoader(http, [
//     { prefix: "./assets/i18n/others/", suffix: ".json" },
//   ]);
// }
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
  {
    path: 'rxjs',
    component: RxjsComponent
  },
];


@NgModule({
  declarations: [
    UserFactoryComponent,
    ViewProviderComponent,
    DynamicComponent,
    AdvanceComponent,
    RxjsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
  //   TranslateModule.forRoot({
  //     loader: {
  //         provide: TranslateLoader,
  //         useFactory: HttpLoaderFactory,
  //         deps: [HttpClient]
  //     },
  // }),
  TranslateModule,
  ],
  providers:[
    { provide: TITLE, useValue: '' }
  ]
})
export class AdvanceAngularModule { }
