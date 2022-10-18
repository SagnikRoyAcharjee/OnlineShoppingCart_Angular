import { Injectable } from '@angular/core';
import { Product } from 'src/app/MODELS/Product.model';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  product!: Product;
  constructor() { }

  getPrice(){
  // this.product.price;
  }
}
