import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from 'src/app/MODELS/Login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  email:any;
  password:any;
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

    isLoggedin():boolean{
      return localStorage.getItem("tk")?true:false ;
    
    }
   GetToken(){
    return localStorage.getItem('tk')||''
  }
  removeToken(){
    return localStorage.removeItem('tk');

  }
}
