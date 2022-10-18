import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/MODELS/Category.model';
import { Product } from 'src/app/MODELS/Product.model';
import { LoginService } from 'src/app/SERVICES/AccountService/login.service';
import { CategoryServiceService } from 'src/app/SERVICES/AdminService/category-service.service';
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
    private prodService: ProductServiceService, private cartService: CartService, private catService:CategoryServiceService
    , public router:Router,public loginService:LoginService) { }
  searchCategory!: Category;
  public filterCategory: any;
  productList: any;
  categoryId: any;

  ngOnInit(): void {
    // this.activatedRoute.queryParams.subscribe(params => {
    //   this.searchCategory = params['categoryId'];
    // });
    this.getAllProducts();

    // this.activatedRoute.paramMap.subscribe(params => {
    //   this.categoryId = params.get('id');
    //   console.log(this.categoryId);

    // });
    // this.getProductsByCategoryId(this.categoryId);
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

  getAllProducts() {
    this.prodService.getProducts()
      .subscribe(
        res => {
          this.productList = res;
          this.filterCategory = res;
          console.log(res);


        })
  }

  filter(categoryName: any) {
    this.filterCategory = this.productList.search((a: any) => {
      if (a.categoryId == categoryName || categoryName == '') {
        return a;
      }
    })

}
  logout(){
    this.loginService.removeToken();
    console.log("Log out initiated");
     this.cartService.removeAllCart();
    alert('Are ypou sure you want to log out ?');
    this.router.navigate(['']);
  }
  
  addToCart(productList: any) {
    this.cartService.addToCart(productList);
  }
  

}
