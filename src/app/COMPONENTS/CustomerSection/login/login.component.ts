import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Login } from 'src/app/MODELS/Login.model';
import { LoginService } from 'src/app/SERVICES/AccountService/login.service';
import { FormControl, Validators } from '@angular/forms';
import { observable } from 'rxjs';
import { Router, RouterLink } from '@angular/router';
import { RegisterUserService } from 'src/app/SERVICES/AccountService/register-user.service';
import { RegisterUser } from 'src/app/MODELS/RegisterUser';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registerUser: RegisterUser = new RegisterUser();
  login: Login = new Login();

  // role = '';

  hide = true;
  responsedata: any;

  errormessage = '';

  constructor(public loginService: LoginService, public router: Router, public registerService: RegisterUserService) { }


  ngOnInit(): void {
  }


  loginForm = new FormGroup({
    username: new FormControl("", [Validators.required,
    Validators.minLength(3),
    Validators.maxLength(15),
    ]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15),
    ]),
    role: new FormControl("", [
      Validators.required
    ])

  });
  // isUserValid: boolean = false;
  loginSubmit() {

    // console.log(Login);

    // localStorage.setItem('user',this.loginForm.value.username);
    if (this.loginForm.valid) {
      this.loginService.loginUser(this.loginForm.value)
        .subscribe
        (
          {
            next: (res) => {
              if (res != null) {
                this.responsedata = res;
                this.responsedata.Status
                localStorage.setItem('token', this.responsedata.token);

                // localStorage.setItem('id', JSON.stringify(this.responsedata.id));
                localStorage.setItem('role', JSON.stringify(this.loginForm.value.role));
                localStorage.setItem('username', JSON.stringify(this.responsedata.username));

                if (this.loginForm.value.role == 'Admin') {
                  this.router.navigate(['/category'])
                  alert("Admin Log in succesful  !!!!")
                }
                else if (this.loginForm.value.role == 'Customer') {
                  this.router.navigate(['home-page'])
                  alert("Customer Log in successful !!!!")
                }
                else {
                  this.router.navigate(['register'])
                }
              }
              // alert("Logged in Successfully !!!")
            },
            error: () => {
              alert("Incorrect Credentials, Please enter valid details");
            }
          }
        )
    }
  }



  // this.loginService
  //   .loginUser([this.loginForm.value.username, this.loginForm.value.password,this.loginForm.value.role])
  //   .subscribe(res => {
  //     if (res == 'Failure') {
  //       this.isUserValid = false;
  //       alert('Login unsuccessful ,Invalid Details.');
  //     }
  //     else {
  //       this.isUserValid = true;
  //       // this.role="Admin";
  //       if (this.loginForm.value.role == "Admin") {
  //         alert('Login Successful as Admin.');
  //         this.router.navigate(["/category"]);
  //       }
  //       else {
  //         alert('Login Succesful as Customer.');
  //         this.router.navigate(["home-page"]);
  //       }
  //     }

  //   });
}

  // getUsersByUsername(uName: string) {
  //   return this.registerService.getUserByUsername(uName)
  //     .subscribe(
  //       res => {
          // this.registerUser=this.role;
  //         console.log(res);

  //       }
  //     )
  // }



  // get Username(): FormControl {
  //   return this.loginForm.get('username') as FormControl;
  // }
  // get Password(): FormControl {
  //   return this.loginForm.get('password') as FormControl;
  // }
  // get role(): FormControl {
  //   return this.loginForm.get('role') as FormControl;
  // }


