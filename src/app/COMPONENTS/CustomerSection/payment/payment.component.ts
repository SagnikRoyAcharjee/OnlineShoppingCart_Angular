import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/SERVICES/CustomerService/cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  public totalItem: number = 0;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
      .subscribe(res => {
        this.totalItem = res.length;
      })

    }

}
