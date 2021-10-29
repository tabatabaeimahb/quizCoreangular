import { Injectable } from "@angular/core";

@Injectable({
        providedIn: 'root'
      })


export class Quiz
{
 
         public id=0;

        public title : string='';

        public checkQuiz:boolean=false;
        
        public quizid:number=0;
 
        

}