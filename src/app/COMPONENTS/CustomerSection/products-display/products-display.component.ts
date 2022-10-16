import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/MODELS/Category.model';
import { Product } from 'src/app/MODELS/Product.model';
import { ProductServiceService } from 'src/app/SERVICES/AdminService/product-service.service';
import { CartService } from 'src/app/SERVICES/CustomerService/cart.service';

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
  constructor(public prodService: ProductServiceService, private activatedRoute: ActivatedRoute, private cartService: CartService) { }

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
}


