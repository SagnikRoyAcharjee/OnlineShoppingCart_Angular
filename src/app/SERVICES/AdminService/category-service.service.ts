import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {
  baseUrl =''

  constructor(private http: HttpClient) { }

  //Get all categories
  getAllCategories(){
  this.http.get('');
  }
}
