import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.css']
})
export class FinishComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any){}

  ngOnInit(): void {
   console.log( this.data.totalQuestion);
   console.log( this.data.correct);
   
  }

}
