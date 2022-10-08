import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl,  NgForm, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { RegisterUser } from 'src/app/MODELS/RegisterUser';
import { RegisterUserService } from 'src/app/SERVICES/AccountService/register-user.service';
import { ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 

  constructor(public service:RegisterUserService,private router:Router ) { }

  ngOnInit():void {
    
  }
  onSubmit(form:NgForm){
    
    this.service.UserRegistration().subscribe(
    res=>{
      alert('Your account has been created successfully');
      this.router.navigate(['login']);
    },
    err =>{
      console.log(err)
    }
    );
  }
  

}
  
  




  

