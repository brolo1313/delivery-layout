import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthService} from "../common/auth/auth.service";
import {AppResponse} from "../../shared/app-response";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private authService:AuthService,
              private router: Router,
              private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(2)]],
    });
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // Handle login logic here

      this.authService.login(this.loginForm.value.username, this.loginForm.value.password)
        .then((resp:AppResponse<any>)=>{
          this.router.navigate(['/']);
        })

      console.log('Login successful', this.loginForm.value);
    } else {
      console.log('Login form is invalid');
    }
  }
}
