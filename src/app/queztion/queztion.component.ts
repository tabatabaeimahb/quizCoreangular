import { Component, Input, OnInit } from '@angular/core';
import {apiservice} from '../api/api.service'
import {Question} from '../Model/Question';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-queztion',
  templateUrl: './queztion.component.html',
  styleUrls: ['./queztion.component.css']
})
export class QueztionComponent implements OnInit {
  //question: string = '';
  
  
  public modelQuestion:Question;
   public urlid;

  constructor(public api:apiservice,private route:ActivatedRoute) {

    this.modelQuestion=new Question();
    this.urlid= this.route.snapshot.paramMap.get('QuizId');

    console.log("urlid",this.urlid);
    console.log("hi"+this.modelQuestion.id);
  }
 
  ngOnInit(): void {

    this.api.questionselected.subscribe(res=>{this.modelQuestion=res;})

    console.log('sdsd');

  }
  public  post()
  {
    this.modelQuestion.IdQuiz=Number(this.urlid);
    this.api.postquestion(this.modelQuestion);
    
    
  }

}
