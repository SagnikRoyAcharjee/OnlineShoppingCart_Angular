import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { CategoryComponent } from './COMPONENTS/AdminSection/category/category.component';
import { ProductComponent } from './COMPONENTS/AdminSection/product/product.component';
import { HomePageComponent } from './COMPONENTS/CustomerSection/home-page/home-page.component';
import { LoginComponent } from './COMPONENTS/CustomerSection/login/login.component';
import { RegisterComponent } from './COMPONENTS/CustomerSection/register/register.component';
import { WelcomeComponent } from './COMPONENTS/CustomerSection/welcome/welcome.component';


const routes: Routes = [
  {
    path:'',
    component:WelcomeComponent
  },
  {
    
    path:'home-page',
    component: HomePageComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'category',
    component:CategoryComponent
  },
  {
     path:'product',
     component:ProductComponent
  },
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
