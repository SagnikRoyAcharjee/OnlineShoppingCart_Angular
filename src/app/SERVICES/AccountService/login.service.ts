import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from 'src/app/MODELS/Login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  username:any;
  uassword:any;
  role:any;
  login:Login=new Login();
  constructor(private http:HttpClient) { }

  baseUrl='https://localhost:7143/api/Login'
   
  
   loginUser(login:any){
    return this.http.post<any>(
      this.baseUrl, login)
      //{
        // Username: Login[0],
        // Password: Login[1],
        // role:Login[2]
        
      //},
      //{
        //responseType:"text",
      //}
    }
   GetToken(){
    return localStorage.getItem('token')||''
  }
}
