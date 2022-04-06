import { CUSTOM_ELEMENTS_SCHEMA, InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookModule } from './book/book.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { booksReducer } from './store/reducers/books.reducer';
import { collectionReducer } from './store/reducers/collection.reducer';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApplicationConstant, APP_CONSTANT } from './share/app-config/app.constant';
import { ButtonComponent } from './share/components/button/button.component';
import { LayoutModule } from './layout/layout.module';
import { layoutReducer } from './store/reducers/layout.reducer';

export interface AppConfig {
  title: string,
  description: string
}
const ApplicationConfig: AppConfig = {
  title: 'Angular App',
  description: 'this is description'
}
export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

// export function HttpLoaderFactory(http: HttpClient):MultiTranslateHttpLoader {
//   return new MultiTranslateHttpLoader(http, [
//     { prefix: "./assets/i18n/home/", suffix: ".json" },
//   ]);
// }
@NgModule({

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BookModule,
    StoreModule.forRoot({
      books: booksReducer,
      collection: collectionReducer,
      layout: layoutReducer
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      },
      defaultLanguage: 'en'
    }),
    BrowserAnimationsModule,
    LayoutModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    { provide: APP_CONFIG, useValue: ApplicationConfig },
    { provide: APP_CONSTANT, useValue: ApplicationConstant },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
