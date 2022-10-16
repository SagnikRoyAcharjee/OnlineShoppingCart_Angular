import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from 'src/app/SERVICES/AdminService/product-service.service';
import { CartService } from 'src/app/SERVICES/CustomerService/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

public products:any=[];
public grandTotal!:number;
public totalItem: number = 0;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products=res;
      this.grandTotal=this.cartService.getTotalPrice();
    });
    this.cartService.getProducts()
      .subscribe(res => {
        this.totalItem = res.length;
      });
  }
  removeItem(product:any){
this.cartService.removeCartItem(product);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }

  

}
