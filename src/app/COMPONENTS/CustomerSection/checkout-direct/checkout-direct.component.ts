import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/SERVICES/CustomerService/cart.service';
import { CheckoutService } from 'src/app/SERVICES/CustomerService/checkout.service';
import { ActivatedRoute } from '@angular/router';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { ProductServiceService } from 'src/app/SERVICES/AdminService/product-service.service';


@Component({
  selector: 'app-checkout-direct',
  templateUrl: './checkout-direct.component.html',
  styleUrls: ['./checkout-direct.component.css']
})
export class CheckoutDirectComponent implements OnInit {

  public totalItem: number = 0;
  public amount: any;
  Product: any;

  constructor(public cartService: CartService, public checkoutService: CheckoutService,
    private param: ActivatedRoute, public prodService: ProductServiceService) { }

  getProductId: any;
  productData: any;
  ngOnInit(): void {
    this.cartService.getProducts()
      .subscribe(res => {
        this.totalItem = res.length;

      })
    // this.amount=this.checkoutService.getPrice();
    this.getProductId = this.param.snapshot.paramMap.get('id');
    console.log(this.getProductId, 'getProduct');
    // if (this.getProductId) {
    //  this.productData=this.Product.filter((value: any)=>{
    //     return value.id==this.getProductId;
    //   });
    //   console.log(this.productData,'productdata>>')
    // }
  }

}
