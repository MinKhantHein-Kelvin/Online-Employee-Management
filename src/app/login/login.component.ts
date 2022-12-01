import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;

  adminLoginData = new FormGroup({
    email : new FormControl,
    password : new FormControl
  })

  constructor( private fb : FormBuilder, private authService : AuthService) { }

  get Email() {
    return this.adminLoginData.get('email');
  }

  get Password() {
    return this.adminLoginData.get('password');
  }

  ngOnInit(): void {
    this.adminLoginData = this.fb.group({
      email : ['',[Validators.required, Validators.email]],
      password : ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  adminLogin(){
    this.authService.adminLogin(this.adminLoginData.value.email,this.adminLoginData.value.password);
  }

}
