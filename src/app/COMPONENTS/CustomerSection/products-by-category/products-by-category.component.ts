import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/MODELS/Category.model';
import { Product } from 'src/app/MODELS/Product.model';
import { ProductServiceService } from 'src/app/SERVICES/AdminService/product-service.service';
import { CartService } from 'src/app/SERVICES/CustomerService/cart.service';

@Component({
  selector: 'app-products-by-category',
  templateUrl: './products-by-category.component.html',
  styleUrls: ['./products-by-category.component.css']
})
export class ProductsByCategoryComponent implements OnInit {
  public totalItem: number = 0;

  constructor(private activatedRoute: ActivatedRoute,
    private prodService: ProductServiceService, private cartService: CartService) { }
  searchCategory!: Category;
  productList: any;
  categoryId: any;

  ngOnInit(): void {
    // this.activatedRoute.queryParams.subscribe(params => {
    //   this.searchCategory = params['categoryId'];
    // });

    this.activatedRoute.paramMap.subscribe(params => {
      this.categoryId = params.get('id');
      console.log(this.categoryId);

    });
    this.getProductsByCategoryId(this.categoryId);
    this.cartService.getProducts()
      .subscribe(res => {
        this.totalItem = res.length;
      })
  }

  getProductsByCategoryId(id: any) {
    this.prodService.getProducts().subscribe((res) => {
      this.productList = res;
    })
  }
}
