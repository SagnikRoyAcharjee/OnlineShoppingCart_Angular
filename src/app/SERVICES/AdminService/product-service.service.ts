import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/MODELS/Product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

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
 
  getCategoryById():Observable<Product[]>{
    return this.http.get<Product[]>(`${this.productbaseUrl}/${this.productData.id}`);
  }
 
  getProductByName():Observable<Product[]>{
    return this.http.get<Product[]>(`${this.productbaseUrl}/${this.productData.name}`);
  }
}
 