import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from 'src/app/MODELS/Login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  Username:any;
  Password:any;

  constructor(private http:HttpClient) { }

  baseUrl='https://localhost:7143/api/Login'
   
  
   loginUser(Login:any){
    return this.http.post(
      this.baseUrl,
      {
        Username: Login[0],
        Password: Login[1],
      },
      {
        responseType:"text",
      }

    );
   }
}
