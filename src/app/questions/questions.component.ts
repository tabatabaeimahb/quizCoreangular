import { Component, OnInit } from '@angular/core';
import { apiservice } from '../api/api.service';
import {Question} from '../Model/Question';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  public ques:Question[] =[];
  
  constructor(private servic:apiservice) { }

  ngOnInit(): void {
    
    this.servic.getQuestion().subscribe(res=>{
                this.ques= res;
                
                })
  }
  public  selectedQuia(q:Question):void
  {
   this.servic.seletedQuest(q);
   
    console.log(q);
  }



}