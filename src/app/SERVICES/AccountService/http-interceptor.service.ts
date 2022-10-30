import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {
  service: any;

  
  constructor( private inject: Injector) { }

  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    let accountService = this.inject.get(LoginService);
    let jwttoken = req.clone({
      setHeaders: {
        Authorization: 'bearer' + accountService.GetToken()
      }
    });
    return next.handle(jwttoken)





    
  }
}
