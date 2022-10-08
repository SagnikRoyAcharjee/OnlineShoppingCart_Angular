import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from 'src/app/COMPONENTS/CustomerSection/login/login.component';
import { RegisterComponent } from 'src/app/COMPONENTS/CustomerSection/register/register.component';



@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule
  ],
  exports:[
    LoginComponent,
    RegisterComponent
  ]
})
export class UsersModule { }
