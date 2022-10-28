import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/MODELS/Product.model';
import { ProductServiceService } from 'src/app/SERVICES/AdminService/product-service.service';
import { Observable } from 'rxjs';
import { CategoryServiceService } from 'src/app/SERVICES/AdminService/category-service.service';
import { Category } from 'src/app/MODELS/Category.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/app/SERVICES/CustomerService/cart.service';
import { LoginService } from 'src/app/SERVICES/AccountService/login.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  title = 'products';
  products: Product[] = [];
  product: Product= {
    id:0,
    name:'',
    productDescription:'',
    price:0,
    productImage:'',
    categoryId:0,
    categoryName:''
  }
  catList: Category[]=[];
  selectedValue:any;

  changeCategory(c:any){
      console.log(c.target.value)
      this.selectedValue=c.target.value;
  }

  constructor(public prodService: ProductServiceService, public catservice:CategoryServiceService,public router:Router, public cartService:CartService,
    public loginService:LoginService) { }

  ngOnInit(): void {
    this.getAllProducts();
    this.catservice.getCategories().subscribe((category:Category[])=>{
      this.catList=category;
    }
    )
  }

  productForm=new FormGroup({

    name:new FormControl("",[Validators.required
      
    ]),
    price:new FormControl("",[Validators.required
      
    ]),
    categoryId:new FormControl("",[Validators.required
      
    ])
    
  })

  
  getAllProducts(){
    this.prodService.getProducts()
    .subscribe(
      res=>{
       this.products=res;
      console.log(res);
     

    })
  }

  onSubmit(){
    if(this.product.id == 0){
      this.prodService.insertProduct(this.product)
    .subscribe(
      res =>{
        this.getAllProducts();
        // console.log(res);
        this.product={
          id:0,
          name:'',
          productDescription:'',
          price:0,
          productImage:'',
          categoryId:0,
          categoryName:''
        };
      }
    );

    }
    else{
     this. updateProduct(this.product);

    }
  }
  
    
    
    
// console.log(this.category);
  
  deleteProduct(id:number){
this.prodService.deleteProduct(id)
.subscribe(
  res =>{
    alert("Product Deleted !")
    this.getAllProducts();
  }
)
  }

  populateForm(product:Product){
    this.product=product;
  }

  updateProduct(product:Product)
  {
    this.prodService.updateProduct(product)
    .subscribe(
      res =>{
        alert("Product has been updated successfully")
       this.getAllProducts();
      }
 
    );

  }

  logout(){
    this.loginService.removeToken();
    console.log("Log out initiated");
    // this.cartService.removeAllCart();
    alert('Are ypou sure you want to log out ?');
    this.router.navigate(['']);
  }

  
}
