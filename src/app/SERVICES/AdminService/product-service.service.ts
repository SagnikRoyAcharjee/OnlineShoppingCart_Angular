import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/MODELS/Product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  httpClient: any;

  constructor(private http:HttpClient) { }
  productbaseUrl:string='https://localhost:7143/api/Product';
   listProduct:Product[]=[]; //for getting list

   productData:Product=new Product(); //for posting data

   insertProduct(product:Product):Observable<Product>{
    return this.http.post<Product>(this.productbaseUrl,product);
  }
 
  updateProduct(product:Product):Observable<Product>{
    return this.http.put<Product>(this.productbaseUrl,product);
  }
 
 
  getProducts():Observable<Product[]>{
  return this.http.get<Product[]>(this.productbaseUrl);
  }
 
 
  deleteProduct(id:number):Observable<Product>{
    return this.http.delete<Product>(this.productbaseUrl +'/' +id);

  }
 
  getProductById(id:any):Observable<Product[]>{
    const  baseUrl="https://localhost:7143/api/Product/" +id;
    return this.http.get<Product[]>(baseUrl);
  }
 
  getProductByName():Observable<Product[]>{
    return this.http.get<Product[]>(`${this.productbaseUrl}/${this.productData.name}`);
  }

  getProductsByCategoryId(categoryId: any):Observable<Product[]>{
   
   const  baseUrl="https://localhost:7143/api/Product?categoryId=" +categoryId;
   console.log(categoryId);
    return this.http.get<Product[]>(baseUrl);
  }
  productDetails(){
    return this.http.get(this.productbaseUrl);
  }
}
 