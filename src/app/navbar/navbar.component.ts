import { Component, OnInit } from '@angular/core';
import { apiAuth } from '../api/apiAuth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 
  constructor(public api:apiAuth) { }

  ngOnInit(): void {
    
  }

  get tok()
  {
  var mytok= localStorage.getItem("token")?.toString();
   return  mytok;
    console.log(localStorage.getItem("token")?.toString());
  }
}
