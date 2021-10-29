import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core"

import { Observable } from "rxjs";


@Injectable()

export class apiInterceptor implements HttpInterceptor
{
    constructor (){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      //بعد از صدار زدن متد در ریپازیتوری وارد این قسمت وی شود و تنظیمات زیر ار اضافه می کند
        var token = localStorage.getItem('token');

        var authRequest = req.clone({
              //  headers : req.headers.set('Authorization',  `Bearer ${token}`)
              setHeaders: {
                'Authorization': `Bearer ${token}`,
                'Content-Type':  'application/json'
              }

        })

        //توسط دستورد زیر وارد بک اند می گردد
        return next.handle(authRequest);

     

        }
       


       
     

}


