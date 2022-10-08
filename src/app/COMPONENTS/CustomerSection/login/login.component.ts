import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Login } from 'src/app/MODELS/Login.model';
import { LoginService } from 'src/app/SERVICES/AccountService/login.service';
import {  FormControl, Validators } from '@angular/forms';
import { observable } from 'rxjs';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private loginService:LoginService ,private router:Router) { }
  

  ngOnInit(): void {
  }
 
  
 loginForm=new FormGroup({
  Username:new FormControl("",[Validators.required,
  Validators.minLength(4),
   Validators.maxLength(15),
  ]),
  Password:new FormControl("",[
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(15),
  ]),

 });
 isUserValid:boolean=false;
 loginSubmit()
 {

   console.log(Login);
  
    this.loginService
    .loginUser([this.loginForm.value.Username ,this.loginForm.value.Password])
    .subscribe(res=>{
      if(res=='Failure')
      {
        this.isUserValid=false;
        alert('Login unsuccessful ,Invalid Details.');
      }
      else{
        
        alert('Login Successful.');
        this.router.navigate(["home-page"]);
      }
    });
  }
  
  
 
 

 get Username():FormControl{
  return this.loginForm.get('Username') as FormControl;
 }
 get Password():FormControl{
  return this.loginForm.get('Password')as FormControl;
 }
  
}

