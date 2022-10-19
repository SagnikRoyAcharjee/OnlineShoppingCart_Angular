import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/MODELS/order.model';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }
  productbaseUrl:string='https://localhost:7143/api/Order';
  

  insertOrder(order:Order):Observable<Order>{
    return this.http.post<Order>(this.productbaseUrl,order);
  }



}
