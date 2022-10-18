import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {
  service: any;

  
  constructor(service: LoginService, private inject: Injector) { }

  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // throw new Error('Method not implemented.');
    // let token=localStorage.getItem('token');
    let accountService = this.inject.get(LoginService);
    let jwttoken = req.clone({
      setHeaders: {
        Authorization: 'bearer' + accountService.GetToken()
      }
    });
    return next.handle(jwttoken)





    // token: this.service.GetToken();
    // let token = localStorage.getItem('token')

    // let jwttoken = req.clone({

    //   setHeaders: {
    //     Authorization: 'bearer ' + token
    //   }
    // })
    // return next.handle(jwttoken)
    //   .pipe(
    //     catchError((errormsg: HttpErrorResponse) => {
    //       console.log(errormsg);
    //       if (errormsg.status != 200) {
    //         alert(errormsg.message);

    //         return throwError(errormsg);
    //       }
    //       return throwError(errormsg);
    //     })
    //   );
    // }
  }
}
