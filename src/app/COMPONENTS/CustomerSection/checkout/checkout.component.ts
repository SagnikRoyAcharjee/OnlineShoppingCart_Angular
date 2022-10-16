import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/MODELS/checkoutUser.model';
import { RegisterUser } from 'src/app/MODELS/RegisterUser';
import { CartService } from 'src/app/SERVICES/CustomerService/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  userDetails: User = {
    id: 0,
    name: '',
    phoneNo: 0,
    address: ''
  };
  public totalItem: number = 0;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
   
    this.cartService.getProducts()
      .subscribe(res => {
        this.totalItem = res.length;
      })
}

}
