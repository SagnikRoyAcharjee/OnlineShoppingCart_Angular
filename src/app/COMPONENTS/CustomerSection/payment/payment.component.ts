import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Order } from 'src/app/MODELS/order.model';
import { LoginService } from 'src/app/SERVICES/AccountService/login.service';
import { CartService } from 'src/app/SERVICES/CustomerService/cart.service';
import { OrderService } from 'src/app/SERVICES/CustomerService/order.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  public totalItem: number = 0;
  public amount: any;
  listOrder = this.cartService.getProducts();
  isSelected: boolean = true;
  paymentMode: string = '';
  constructor(private cartService: CartService, public router: Router, public loginService: LoginService, public orderService: OrderService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
      .subscribe(res => {
        this.totalItem = res.length;
      })

    this.amount = this.cartService.getTotalPrice();

  }

  paymentForm = new FormGroup({
    ownerName: new FormControl("", [Validators.required,

    ]),
    cardNumber: new FormControl("", [
      Validators.required,
      Validators.minLength(16),
      Validators.maxLength(16),
      Validators.pattern("^4[0-9]{0,}$")

    ]),
    expiryDate: new FormControl("", [
      Validators.required
    ]),
    cvv: new FormControl("", [
      Validators.minLength(3),
      Validators.maxLength(3),
      Validators.required
    ]),

  });

  // onPayOnDelivery() {
  //   this.isSelected = true;
  //   alert("Are you sure you want to place your order?")
  //   this.router.navigate(['/place-order'])

  // }
  // onCard() {
  //   this.isSelected = false;
  //   alert("Are you sure you want to place your order?")
  //   this.router.navigate(['/place-order'])

  // }

  get ownerName(): FormControl {
    return this.paymentForm.get("ownerName") as FormControl;
  }
  get cardNumber(): FormControl {
    return this.paymentForm.get("cardNumber") as FormControl;
  }
  get expiryDate(): FormControl {
    return this.paymentForm.get("expiryDate") as FormControl;
  }
  get cvv(): FormControl {
    return this.paymentForm.get("cvv") as FormControl;
  }


  

  placeOrderByCashOnDelivery() {
    let obj: Order = {} as Order;
    this.listOrder.forEach(data => {
      obj = {
        billAmount: this.cartService.getTotalPrice(), dateOfOrder: new Date(),
<<<<<<< HEAD
        modeOfPayment: "Cash On Delivery", usersId: 1
=======
        modeOfPayment: "Cash On Delivery", usersId: 16
>>>>>>> 6eff0a2a2c1b5552086b039eb0493aa4e70a9276
      }
      return obj;
    })
    this.orderService.insertOrder(obj).subscribe(res => {
      console.log(res);
      alert("Are You sure you want to place your order?");
      this.router.navigate(['/place-order'])
    })

    

  }

  placeOrderByCard() {
    let obj: Order = {} as Order;
    this.listOrder.forEach(data => {
      obj = {
        billAmount: this.cartService.getTotalPrice(), dateOfOrder: new Date(),
        modeOfPayment: "By Debit Card", usersId: 16
      }
      return obj;
    })
    this.orderService.insertOrder(obj).subscribe(res => {
      console.log(res);
      alert("Are you sure you want to place your order?");
      this.router.navigate(['/place-order'])
    })

    

  }






  logout() {
    this.loginService.removeToken();
    console.log("Log out initiated");
    this.cartService.removeAllCart();
    alert('Are ypou sure you want to log out ?');
    this.router.navigate(['']);
  }

}
