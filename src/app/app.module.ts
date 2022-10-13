import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS }from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

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
import { FormBuilder } from '@angular/forms';
import { CategoryServiceService } from './SERVICES/AdminService/category-service.service';
import { HttpInterceptorService } from './SERVICES/AccountService/http-interceptor.service';
import { PageNotFoundComponent } from './SHARED/Component/page-not-found/page-not-found.component';
import { UniqueUsernameValidatorDirective } from './SHARED/Directive/unique-username-validator.directive';
import { HomePageComponent } from './COMPONENTS/CustomerSection/home-page/home-page.component';
// import { ToastrModule, ToastrService } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
   LoginComponent, 
   RegisterComponent,
   
   CategoryComponent,
   ProductComponent,
   WelcomeComponent,
   PageNotFoundComponent,
   UniqueUsernameValidatorDirective,
   HomePageComponent
   
   
 
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  
  
    
  
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:HttpInterceptorService,
    multi:true
} ,
    RegisterUserService,CategoryServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
