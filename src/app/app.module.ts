import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './COMPONENTS/CustomerSection/login/login.component';
import { RegisterComponent } from './COMPONENTS/CustomerSection/register/register.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryComponent } from './COMPONENTS/AdminSection/category/category.component';
import { ProductComponent } from './COMPONENTS/AdminSection/product/product.component';
import { WelcomeComponent } from './COMPONENTS/CustomerSection/welcome/welcome.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RegisterUser } from './MODELS/RegisterUser';
import { RegisterUserService } from './SERVICES/AccountService/register-user.service';
import { FormBuilder } from '@angular/forms';
import { CategoryServiceService } from './SERVICES/AdminService/category-service.service';
import { HttpInterceptorService } from './SERVICES/AccountService/http-interceptor.service';
import { PageNotFoundComponent } from './SHARED/Component/page-not-found/page-not-found.component';
import { UniqueUsernameValidatorDirective } from './SHARED/Directive/unique-username-validator.directive';
import { HomePageComponent } from './COMPONENTS/CustomerSection/home-page/home-page.component';
import { CartComponent } from './COMPONENTS/CustomerSection/cart/cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { SearchPipe } from './SHARED/search.pipe';
import { ProductsDisplayComponent } from './COMPONENTS/CustomerSection/products-display/products-display.component';
import { ViewProductInfoComponent } from './COMPONENTS/CustomerSection/view-product-info/view-product-info.component';
import { ProductsByCategoryComponent } from './COMPONENTS/CustomerSection/products-by-category/products-by-category.component';
import { CheckoutComponent } from './COMPONENTS/CustomerSection/checkout/checkout.component';
import { PaymentComponent } from './COMPONENTS/CustomerSection/payment/payment.component';
import { PlaceOrderComponent } from './COMPONENTS/CustomerSection/place-order/place-order.component';
import { CheckoutDirectComponent } from './COMPONENTS/CustomerSection/checkout-direct/checkout-direct.component';
import { ContactUsComponent } from './COMPONENTS/CustomerSection/contact-us/contact-us.component';
import { OrderDetailsComponent } from './COMPONENTS/CustomerSection/order-details/order-details.component';

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
    HomePageComponent,
    CartComponent,
    SearchPipe,
    ProductsDisplayComponent,
    ViewProductInfoComponent,
    ProductsByCategoryComponent,
    CheckoutComponent,
    PaymentComponent,
    PlaceOrderComponent,
    CheckoutDirectComponent,
    ContactUsComponent,
    OrderDetailsComponent




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatButtonModule




  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true
  },
    RegisterUserService, CategoryServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
