import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QueztionComponent } from './queztion/queztion.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { apiservice } from './api/api.service';
import { QuestionsComponent } from './questions/questions.component';
import {MatListModule} from '@angular/material/list';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Question } from './Model/Question';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { RegisterComponent } from './register/register.component';
import { apiAuth } from './api/apiAuth.service';
import { apiInterceptor } from './api/api.Interceptor';
import { LoginComponent } from './login/login.component';
import { PlayComponent } from './play/play.component';
import { PlayQuizComponent } from './play-quiz/play-quiz.component';

import {MatExpansionModule} from '@angular/material/expansion';
import {MatRadioModule} from '@angular/material/radio';
import { FinishComponent } from './finish/finish.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

const routes = [
  {path: '' , component: HomeComponent},
  {path: 'question' , component: QueztionComponent  },
  {path: 'questions' , component: QuestionsComponent},
  {path:'question/:QuizId',component: QueztionComponent},
  {path:'quiz', component:QuizComponent},

  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'logout',component:HomeComponent},
  {path:'playquiz/:QuizId',component: PlayQuizComponent},
  {path:'play',component: PlayComponent},

];
@NgModule({
  declarations: [
    AppComponent,
    QueztionComponent,
    QuestionsComponent,
    NavbarComponent,
    HomeComponent,
    QuizComponent,
    QuizzesComponent,
    RegisterComponent,
    LoginComponent,
    PlayComponent,
    PlayQuizComponent,
    FinishComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatListModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatRadioModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [apiservice,apiAuth,
    {
        provide:HTTP_INTERCEPTORS,
        useClass:apiInterceptor,
        multi:true
          
    }
    
   
   
  
  ],
  bootstrap: [AppComponent],
  entryComponents:[FinishComponent]
 
})
export class AppModule { }


