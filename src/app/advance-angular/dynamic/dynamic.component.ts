import { Component, Inject, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TITLE } from '../advance-angular.module';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss']
})
export class DynamicComponent implements OnInit {
  @Input() value! : string;
  constructor(@Inject(TITLE) private titleInjected: string,
  public translate: TranslateService) {
    translate.setDefaultLang('en');
   }

  ngOnInit(): void {
    this.value = this.value || this.titleInjected;
  }

}
