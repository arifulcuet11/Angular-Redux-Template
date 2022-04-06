import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { AuthService, LoginModel } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });
  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private cookieService: CookieService) { 
    }

  ngOnInit(): void {
  }
  login() {
    const value = this.loginForm.value as LoginModel;
    this.authService.login(value);
  }
}
