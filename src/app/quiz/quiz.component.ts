import { Component, OnInit } from '@angular/core';
import { apiservice } from '../api/api.service';
import { Quiz } from '../Model/Quiz';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  public quiz:Quiz;
  constructor(private api:apiservice) {

    this.quiz=new  Quiz();
    console.log('constractorquiz');
   }

  ngOnInit(): void {

    this.api.quizSelected.subscribe(res=>{
      this.quiz=res;
    })  
    console.log('quiz');
  }
  public postquiz()
  {
    this.api.postquiz(this.quiz).subscribe(res=>{console.log(res)});
  }
}
