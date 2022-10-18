import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/SERVICES/AccountService/login.service';
import { CartService } from 'src/app/SERVICES/CustomerService/cart.service';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {

  public totalItem: number = 0;
  constructor(private cartService:CartService ,public loginService:LoginService, public router:Router) { }

  ngOnInit(): void {
    this.cartService.getProducts()
      .subscribe(res => {
        this.totalItem = res.length;
      })
  }
  logout(){
    this.loginService.removeToken();
    console.log("Log out initiated");
    this.cartService.removeAllCart();
    alert('Are ypou sure you want to log out ?');
    this.router.navigate(['']);
  }

}
