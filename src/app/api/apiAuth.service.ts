import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {Form} from '@angular/forms'

@Injectable()
export class apiAuth
{
    constructor(private http:HttpClient){}
        

    public register(frm:any)
    {
           this.http.post('http://localhost:58799/api/Account',frm,{responseType: 'text'})
           .subscribe(res=>{
                localStorage.setItem('token',res.toString());

           })
    }
    public login(credentioal:any)
    {
           this.http.post('http://localhost:58799/api/Account/login',
                            credentioal,
                            {responseType: 'text'})
           .subscribe(res=>{
                localStorage.setItem('token',res.toString());
               
           })
    }
    public logout()
    {
        localStorage.removeItem('token');
    }
}



