import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterUser } from 'src/app/MODELS/RegisterUser';



@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

  constructor(private http:HttpClient) { }
  
  formData:RegisterUser=new RegisterUser();
 
  readonly baseUrl='https://localhost:7143/api/Register';

  UserRegistration(){
    return this.http.post(this.baseUrl ,this.formData);
  }

  getUserByUsername(){
  
    return this.http.get(this.baseUrl)
  }
}
