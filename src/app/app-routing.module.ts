import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { CategoryComponent } from './COMPONENTS/AdminSection/category/category.component';
import { ProductComponent } from './COMPONENTS/AdminSection/product/product.component';
import { AboutUsComponent } from './COMPONENTS/CustomerSection/about-us/about-us.component';
import { CartComponent } from './COMPONENTS/CustomerSection/cart/cart.component';
import { CheckoutDirectComponent } from './COMPONENTS/CustomerSection/checkout-direct/checkout-direct.component';
import { CheckoutComponent } from './COMPONENTS/CustomerSection/checkout/checkout.component';
import { ContactUsComponent } from './COMPONENTS/CustomerSection/contact-us/contact-us.component';
import { HomePageComponent } from './COMPONENTS/CustomerSection/home-page/home-page.component';

import { LoginComponent } from './COMPONENTS/CustomerSection/login/login.component';
import { OrderDetailsComponent } from './COMPONENTS/CustomerSection/order-details/order-details.component';
import { PaymentComponent } from './COMPONENTS/CustomerSection/payment/payment.component';
import { PlaceOrderComponent } from './COMPONENTS/CustomerSection/place-order/place-order.component';
import { ProductsByCategoryComponent } from './COMPONENTS/CustomerSection/products-by-category/products-by-category.component';
import { ProductsDisplayComponent } from './COMPONENTS/CustomerSection/products-display/products-display.component';
import { RegisterComponent } from './COMPONENTS/CustomerSection/register/register.component';
import { ViewProductInfoComponent } from './COMPONENTS/CustomerSection/view-product-info/view-product-info.component';
import { WelcomeComponent } from './COMPONENTS/CustomerSection/welcome/welcome.component';
import { AuthGuardService } from './SHARED/auth-guard.service';
import { PageNotFoundComponent } from './SHARED/Component/page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {

    path: 'home-page',
    component: HomePageComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'category',
    component: CategoryComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'product',
    component: ProductComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'product-display',
    component: ProductsDisplayComponent
  },
  {
    path: 'view-product-info/:id',
    component: ViewProductInfoComponent
  },
  {
    path: 'products-by-category/:categoryId',
    component: ProductsByCategoryComponent
  },
  {
    path: 'cart',
    component: CartComponent
    

  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'checkout-direct/:id',
    component: CheckoutDirectComponent
  },
  {
    path: 'payment',
    component: PaymentComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'place-order',
    component: PlaceOrderComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'order-details',
    component: OrderDetailsComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
