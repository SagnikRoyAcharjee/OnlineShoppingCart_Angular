import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/SERVICES/AccountService/login.service';
import { CartService } from 'src/app/SERVICES/CustomerService/cart.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  public totalItem: number = 0;
  public amount:any;
  constructor(private cartService:CartService,public router:Router, public loginService:LoginService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
      .subscribe(res => {
        this.totalItem = res.length;
      })
      this.amount=  this.cartService.getTotalPrice();

    }

    paymentForm = new FormGroup({
      ownerName: new FormControl("", [Validators.required,
      
      ]),
      cardNumber: new FormControl("", [
        Validators.required,
        Validators.minLength(16),
        Validators.maxLength(16),
       
      ]),
      expiryDate: new FormControl("", [
        Validators.required
      ]),
      cvv:new FormControl("", [
        Validators.minLength(3),
        Validators.maxLength(3),
        Validators.required
      ]),
      
    });
    
    onClick(){
      alert("Are you sure you want to place your order?")
      this.router.navigate(['/place-order'])
    }
    get ownerName():FormControl{
      return this.paymentForm.get("ownerName") as FormControl;
     }
     get cardNumber():FormControl{
      return this.paymentForm.get("cardNumber") as FormControl;
     }
     get expiryDate():FormControl{
      return this.paymentForm.get("expiryDate") as FormControl;
     }
     get cvv():FormControl{
      return this.paymentForm.get("cvv") as FormControl;
     }

     logout(){
      this.loginService.removeToken();
      console.log("Log out initiated");
      this.cartService.removeAllCart();
      alert('Are ypou sure you want to log out ?');
      this.router.navigate(['']);
    }

}
