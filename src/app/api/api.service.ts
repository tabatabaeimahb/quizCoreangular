import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {Question} from '../Model/Question';
import {Quiz} from '../Model/Quiz';
import { Observable ,of,Subject} from 'rxjs';

@Injectable()

export class apiservice
{
    //تعریف دیکشنری
   private selectedQuestion =new Subject<any>();
   public questionselected=this.selectedQuestion.asObservable();


   private selectedquiz=new Subject<any>();

   //
   public quizSelected=this.selectedquiz.asObservable();
  

    constructor(private http:HttpClient){}

    public postquestion(q:Question)
    {

        const options = {
            question:q.question,
            answer1:q.answer1,
            answer2:q.answer2,
            answer3:q.answer3,
            CorrectAnswer:q.correctAnswer,
            IdQuiz:q.IdQuiz
          };

          this.http.post('http://localhost:58799/api/Question',options).subscribe(res=>{
          console.log(res);
          
           })
    }
    public getQuestion():Observable<Question[]>
    {
     return   this.http.get<Question[]>('http://localhost:58799/api/Question');
    }
   
    public seletedQuest(q:Question)
    {
        this.selectedQuestion.next(q);
    }
    public putQuestion(q:Question)
    {
      this.http.put('http://localhost:58799/api/Question/'+q.id.toString(),q)
      .subscribe(res=>{
          console.log();
      });

    }

    public getQuestionByid(quizid:number):Observable<Question[]>
    {
        return this.http.get<Question[]>
                        ('http://localhost:58799/api/Question/getQuestionByid/'+quizid);
    }
    ////////////////////quiz

    public getallQuiz():Observable<Quiz[]>
    {
       return this.http.get<Quiz[]>('http://localhost:58799/api/Quizs/GetallQuiz');
    }
    public getQuizzes():Observable<Quiz[]>
    {
        return this.http.get<Quiz[]>('http://localhost:58799/api/Quizs');

    }
    public postquiz(q:Quiz):Observable<Quiz>
    {
        const options = {
            title:q.title,
          };

        return this.http.post<Quiz>('http://localhost:58799/api/Quizs',options).pipe()

       
    }
    public selecteQuiz(q:Quiz)
    {
        // با این کار مقدار ورودی برای ارسال به کامپوننت مورد نظر تنظیم می گردد
        this.selectedquiz.next(q);
    }

}