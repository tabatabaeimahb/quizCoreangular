import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable()

export class apiservice
{
    constructor(private http:HttpClient){}
    public postquestion(question:string)
    {
          this.http.post('',question).subscribe(res=>{
          console.log(res);
          
           })
    }
}