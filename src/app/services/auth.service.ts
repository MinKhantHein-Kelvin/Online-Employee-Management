import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  adminEmail : string = environment.adminEmail;
  adminPassword : string = environment.adminPassword;

  constructor(private http : HttpClient, private router : Router) { }

  adminLogin(email : string, passwrod : string){
    if(email === this.adminEmail && passwrod === this.adminPassword){
      localStorage.setItem("token",(Math.random()+1).toString(36).substring(7));
      console.log('Login Successful');
      this.router.navigate(['/dashboard']);
    }
    else{
      alert("Login Fail! Wrong Credential");
    }
  }

  isAdminLogin(){
    if(localStorage.getItem("token")){
      return true
    }else{
      return false;
    }
  }
}
