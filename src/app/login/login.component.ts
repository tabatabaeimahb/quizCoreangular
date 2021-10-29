import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { apiservice } from '../api/api.service';
import { apiAuth } from '../api/apiAuth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public form:FormGroup;
  constructor(public apiAuth:apiAuth,private api: apiservice , private fb: FormBuilder) {

    this.form = this.fb.group({
      email: new FormControl('', [
                                  Validators.required,
                                  Validators.minLength(8),
                                  Validators.maxLength(30),
                                  Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
                                ]),
       pass: new FormControl('', [
                                  Validators.required,
                                  Validators.minLength(3),
                                  Validators.maxLength(30),
                                  ])
        });


   }

  ngOnInit(): void {
  }

  get f()
  {
    return this.form.controls;
  }

  public getErrorMessage() {

    console.log('hi getErrorMessage');
  
  
    if (this.form.hasError('required')) {
      console.log('You must enter a value');
      return 'You must enter a value';
    }
    if (this.form.hasError('pattern')) {
      console.log('You must correct format');
      return 'You must correct format';
    }

    return this.form.hasError('minLength') ? 'Not a valid email' : '';
  }
}
