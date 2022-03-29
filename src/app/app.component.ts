import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-redux-template';
  constructor(private translate: TranslateService){
     //  translate.use('bn');
  }
  onChange(value: any){
    console.log(value.target.value)
    this.translate.use(value.target.value)

  }
}
