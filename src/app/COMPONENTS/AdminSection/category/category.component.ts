import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Category } from 'src/app/MODELS/Category.model';
import { Product } from 'src/app/MODELS/Product.model';
import { LoginService } from 'src/app/SERVICES/AccountService/login.service';
import { CategoryServiceService } from 'src/app/SERVICES/AdminService/category-service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  title = 'categories';
  categories: Category[] = [];
  category: Category= {
    id:0,
    categoryName:'',
    categoryImage:''
  }
 
  constructor(public catservice:CategoryServiceService, public loginService:LoginService, public router:Router) { }
  
  

  ngOnInit(): void {
    
    
    this.getAllCategories();
  }

  // addClick(){
  //   this.category={
  //     Id:0,
  //     CategoryName:""
  //   }
  //   this.ModalTitle="Add Category";
  //   this.ActivateAddEditCategoryComp=true;

  // }

  // closeClick(){
  //   this.ActivateAddEditCategoryComp=false;
  //   this.getCategories();
  // }

  categoryForm= new FormGroup({

    categoryName:new FormControl("",[Validators.required
      
     ])
  })
  
  getAllCategories(){
    this.catservice.getCategories()
    .subscribe(
      res=>{
       this.categories=res;
      console.log(res);
     

    })
  }

  onSubmit(){
    if(this.category.id == 0){
      this.catservice.insertCategory(this.category)
    .subscribe(
      res =>{
        
        this.getAllCategories();
        // console.log(res);
        this.category={
          id:0,
          categoryName:'',
          categoryImage:''
        };
      }
    );

    }
    else{
     this. updateCategory(this.category);

    }
  }
  
    
    
    
// console.log(this.category);
  
  deleteCategory(id:number){
this.catservice.deleteCategory(id)
.subscribe(
  res =>{
    alert("Category Deleted !")
    this.getAllCategories();
  }
)
  }

  populateForm(category:Category){
    this.category=category;
  }

  updateCategory(category:Category)
  {
    this.catservice.updateCategory(category)
    .subscribe(
      res =>{
        alert("Category has been updated successfully")
       this.getAllCategories();
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
