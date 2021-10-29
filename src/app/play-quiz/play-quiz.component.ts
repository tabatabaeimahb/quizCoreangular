import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { apiservice } from '../api/api.service';
import { Question } from '../Model/Question';
import { Quiz } from '../Model/Quiz';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FinishComponent } from '../finish/finish.component';

@Component({
  selector: 'app-play-quiz',
  templateUrl: './play-quiz.component.html',
  styleUrls: ['./play-quiz.component.css']
})
export class PlayQuizComponent implements OnInit {
  step = 0;

  public setStep(index: number) {
    this.step = index;
    console.log(index);
  }

  public nextStep() {
    this.step++;
  }

 public prevStep() {
    this.step--;
  }
  public quizId:string | null='';
  public lstquestion:Question[]=[];
  public correct=0;
  constructor(public modelQui:Quiz,private route:ActivatedRoute
    ,private api:apiservice,public dialog: MatDialog) { }


  public favoriteSeason: string='';

  answers:string[]=[];
  ngOnInit(): void {
   
     this.quizId=this.route.snapshot.paramMap.get('QuizId');
     if (this.quizId!=null)
     {
      
         this.api.getQuestionByid( parseInt(this.quizId))
         .subscribe(res=>
          {
            this.lstquestion=res
            
            console.log(this.lstquestion);
            // this.lstquestion.forEach(q=>{
            //   this.answers=[q.answer1,q.answer2,q.answer3,q.CorrectAnswer];
            //   console.log( this.answers);
            // })

            for (let i = 0; i < this.lstquestion.length; i++) {

              console.log(this.lstquestion[i].correctAnswer);
              this.answers=[this.lstquestion[i].answer1,
                            this.lstquestion[i].answer2,
                            this.lstquestion[i].answer3
                            ,this.lstquestion[i].correctAnswer];
               //  console.log( this.answers);
            }
           
          })
     }
 
  }
  public calculate()
  {
    
      this.lstquestion.forEach(res=>
      {
          if (res.correctAnswer===res.selectedanswer)
          {
            this.correct++;
          }
          console.log("correct"+this.correct);
      })

      let ref=this.dialog.open(FinishComponent, {
      
        data: {  totalQuestion:  this.lstquestion.length, correct:this.correct}
      });
  }
}
