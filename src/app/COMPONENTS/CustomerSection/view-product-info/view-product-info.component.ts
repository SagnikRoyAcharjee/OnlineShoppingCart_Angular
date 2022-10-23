import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/MODELS/Category.model';
import { Product } from 'src/app/MODELS/Product.model';
import { LoginService } from 'src/app/SERVICES/AccountService/login.service';
import { RegisterUserService } from 'src/app/SERVICES/AccountService/register-user.service';
import { ProductServiceService } from 'src/app/SERVICES/AdminService/product-service.service';
import { CartService } from 'src/app/SERVICES/CustomerService/cart.service';

@Component({
  selector: 'app-view-product-info',
  templateUrl: './view-product-info.component.html',
  styleUrls: ['./view-product-info.component.css']
})
export class ViewProductInfoComponent implements OnInit {
  products: Product[] = [];
  
 
  product:any;

  public totalItem: number = 0;
  constructor(private activatedRoute:ActivatedRoute, private prodService:ProductServiceService,private cartService:CartService,
    public loginService:LoginService, public router:Router,public registerService:RegisterUserService) { }
  id:any;
  
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params=>{
      this.id=params.get('id');

      });
      this.getProductById( this.id);
      this.cartService.getProducts()
      .subscribe(res => {
        this.totalItem = res.length;
      })

    
  }
  getProductById(id:any){
    this.prodService.getProductById(id).subscribe((res)=>{
      this.product=res;
    })
  }

  addToCart(product:any){
    this.cartService.addToCart(product);
  }
  logout(){
    this.loginService.removeToken();
    console.log("Log out initiated");
    this.cartService.removeAllCart();
    alert('Are ypou sure you want to log out ?');
    this.router.navigate(['']);
  }

  deleteAccount(id:number)
  {
    
    if(this.loginService.isLoggedin()){
      if(this.registerService.getUserByUsername ==this.id) 
      {
        console.log(id)
        alert("Are you sure you want to delete your account?")
        this.registerService.deleteUserAccount;
      }
    }
  }

}
