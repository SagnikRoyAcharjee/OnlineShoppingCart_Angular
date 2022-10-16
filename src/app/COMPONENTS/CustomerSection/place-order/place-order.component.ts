import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/SERVICES/CustomerService/cart.service';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {

  public totalItem: number = 0;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
      .subscribe(res => {
        this.totalItem = res.length;
      })
  }

}
