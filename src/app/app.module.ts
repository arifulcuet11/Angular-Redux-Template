import { CUSTOM_ELEMENTS_SCHEMA, InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookModule } from './book/book.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { booksReducer } from './store/reducers/books.reducer';
import { collectionReducer } from './store/reducers/collection.reducer';

export interface AppConfig {
  title: string,
  description: string
}
const ApplicationConfig: AppConfig = {
  title: 'Angular App',
  description: 'this is description'
}
export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');
@NgModule({

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BookModule,
    StoreModule.forRoot({ books: booksReducer, collection: collectionReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    {provide: APP_CONFIG, useValue: ApplicationConfig},
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
providers:[

]
