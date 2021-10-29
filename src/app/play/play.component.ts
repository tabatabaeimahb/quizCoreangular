import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { apiservice } from '../api/api.service';
import { Quiz} from '../Model/Quiz';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  public quiz:Quiz[]=[];
  public selectedquiz:number=0;
  constructor(public api:apiservice,public modelQui:Quiz,private route:Router) { }

  ngOnInit(): void {
    this.api.getallQuiz().subscribe(res=>{

      console.log( res);
      this.quiz=res
     
    })
   
  }

  
  public getidquis(id:number)
  {
     this.modelQui.quizid=id;
    this.route.navigate(['/playquiz',id]);
    console.log(this.modelQui.quizid);

    
  }

}
