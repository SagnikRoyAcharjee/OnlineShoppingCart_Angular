import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl,  NgForm, NG_ASYNC_VALIDATORS, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { RegisterUser } from 'src/app/MODELS/RegisterUser';
import { RegisterUserService } from 'src/app/SERVICES/AccountService/register-user.service';
import { ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';


import { AsyncValidator } from '@angular/forms';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[{provide:NG_ASYNC_VALIDATORS, useExisting:RegisterComponent,multi:true}]
})
export class RegisterComponent implements OnInit {

 

  constructor(public service:RegisterUserService,private router:Router ) { }

  ngOnInit():void {
    
  }
  registerform=new FormGroup({
    
       username:new FormControl("",[Validators.required,
       Validators.minLength(3),
       Validators.maxLength(15),
      
      ]),
      address:new FormControl("",[
        Validators.minLength(8),
         Validators.maxLength(50),
      ]),
      email:new FormControl("",[Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50),
      Validators.email
    ]),
      phoneNo:new FormControl("",[Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
    ]),
    password:new FormControl("",[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15),
    ]),
    // ConfirmPass:new FormControl("",[
    //   Validators.required,
    //   Validators.minLength(3),
    //   Validators.maxLength(15),
      
    // ]),
      
  })



  onSubmit(form:NgForm){
    
    this.service.UserRegistration().subscribe(
    res=>{
      
      alert('Your account has been created successfully');
      // this.registerform.reset();
      this.router.navigate(['login']);
    },
    err =>{
      console.log(err)
    }
    );
  }
  validate(u :AbstractControl):Promise<ValidationErrors | null> |Observable<ValidationErrors | null>{
    return this.service.getUserByUsername(u.value).pipe(
      map(users =>{
        return users && users.length > 0 ?{'uniqueUsername':true}: null;
      })
    );
  }
  

}
  
  




  

