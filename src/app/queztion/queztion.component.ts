import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-queztion',
  templateUrl: './queztion.component.html',
  styleUrls: ['./queztion.component.css']
})
export class QueztionComponent implements OnInit {
  quztion: string = '';

  constructor() {}
 
  ngOnInit(): void {
   this.quztion="";
  }
  public  post(q:string)
  {
    console.log(q);
  }
}
