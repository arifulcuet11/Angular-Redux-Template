import { Inject, Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AppConstant, APP_CONSTANT } from 'src/app/share/app-config/app.constant';

export interface LoginModel {
  email: string;
  password: string
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private cookieService: CookieService,
    @Inject(APP_CONSTANT) private appConstant: AppConstant) { }

  isLogin() {
    return this.cookieService.check(this.appConstant.TOKEN);
  }

  login(model: LoginModel) {
    this.cookieService.set(this.appConstant.TOKEN, model.email);
  }
}
