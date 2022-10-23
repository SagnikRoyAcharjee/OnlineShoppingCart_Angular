import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Category } from 'src/app/MODELS/Category.model';
import { Product } from 'src/app/MODELS/Product.model';
import { LoginService } from 'src/app/SERVICES/AccountService/login.service';
import { ProductServiceService } from 'src/app/SERVICES/AdminService/product-service.service';
import { CartService } from 'src/app/SERVICES/CustomerService/cart.service';
import { CheckoutService } from 'src/app/SERVICES/CustomerService/checkout.service';

@Component({
  selector: 'app-products-display',
  templateUrl: './products-display.component.html',
  styleUrls: ['./products-display.component.css']
})
export class ProductsDisplayComponent implements OnInit {

  productList: Product[] = [];
  products: Product[] = [];
  selectedProduct: Product[] = [];

  public totalItem: number = 0;
  constructor(public prodService: ProductServiceService, private activatedRoute: ActivatedRoute, private cartService: CartService,
    public router:Router,public checkoutService:CheckoutService,public loginService:LoginService) { }

  ngOnInit(): void {
    this.getAllProducts();

    this.productList.forEach((a: any) => {
      Object.assign(a,{ quantity:1, price: a.price });
    });
    this.cartService.getProducts()
      .subscribe(res => {
        this.totalItem = res.length;
      })

  }

  

  getAllProducts() {
    this.prodService.getProducts()
      .subscribe(
        res => {
          this.productList = res;
          
          console.log(res);


        })
  }



  searchProducts = '';

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }

  getPrice(){
   this. checkoutService.getPrice();
    this.router.navigate(['../checkout']);


 }
 logout(){
  this.loginService.removeToken();
  console.log("Log out initiated");
  this.cartService.removeAllCart();
  alert('Are ypou sure you want to log out ?');
  this.router.navigate(['']);
}
}


