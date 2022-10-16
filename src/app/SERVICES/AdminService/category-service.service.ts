import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Category } from 'src/app/MODELS/Category.model';


@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {
  baseUrl =''

  constructor(private http: HttpClient) { }

  categorybaseUrl:string='https://localhost:7143/api/Category';
  // listCategory:Category[]=[]; //for getting list

  categoryData:Category=new Category(); //for posting data

  insertCategory(category:Category):Observable<Category>{
    return this.http.post<Category>(this.categorybaseUrl,category);
  }
 
  updateCategory(category:Category):Observable<Category>{
    return this.http.put<Category>(this.categorybaseUrl,category);
  }
 
 
  getCategories():Observable<Category[]>{
  return this.http.get<Category[]>(this.categorybaseUrl);
  }
 
 
  deleteCategory(id:number):Observable<Category>{
    return this.http.delete<Category>(this.categorybaseUrl +'/' +id);

  }
 
  getCategoryById():Observable<Category[]>{
    return this.http.get<Category[]>(`${this.categorybaseUrl}/${this.categoryData.id}`);
  }
 
  getCategoryByName():Observable<Category[]>{
    return this.http.get<Category[]>(`${this.categorybaseUrl}/${this.categoryData.categoryName}`);
  }
}
