import { Component, OnInit } from '@angular/core';
import { apiservice } from '../api/api.service';
import {Quiz}from '../Model/Quiz';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit {

 public quiz:Quiz[]=[]; 


  constructor(public api:apiservice) { }

  ngOnInit(): void {

    this.api.getQuizzes().subscribe(res=>{
        this.quiz=res;
      })


  }

  public selectedquiz(q:Quiz)
  {
     this.api.selecteQuiz(q);
  }
}
