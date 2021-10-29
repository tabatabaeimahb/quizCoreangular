import { Component, OnInit } from '@angular/core';
import {PlayComponent} from '../play/play.component'
@Component({
  selector: 'app-home',
  // template:'<app-queztion></app-queztion><app-questions></app-questions>'
  templateUrl: './home.component.html',
 
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
