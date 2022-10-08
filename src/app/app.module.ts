import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule }from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './COMPONENTS/CustomerSection/home-page/home-page.component';
import { LoginComponent } from './COMPONENTS/CustomerSection/login/login.component';
import { RegisterComponent } from './COMPONENTS/CustomerSection/register/register.component';
import { FormGroup, FormsModule,ReactiveFormsModule} from '@angular/forms';
import { CategoryComponent } from './COMPONENTS/AdminSection/category/category.component';
import { ProductComponent } from './COMPONENTS/AdminSection/product/product.component';
import { WelcomeComponent } from './COMPONENTS/CustomerSection/welcome/welcome.component';
import {  RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RegisterUser } from './MODELS/RegisterUser';
import { RegisterUserService } from './SERVICES/AccountService/register-user.service';

@NgModule({
  declarations: [
    AppComponent,
   LoginComponent,
   RegisterComponent,
   HomePageComponent,
   CategoryComponent,
   ProductComponent,
   WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
    
  
  ],
  providers: [RegisterUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
