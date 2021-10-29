import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup, Validators,FormControl} from '@angular/forms'
import { apiservice } from '../api/api.service';
import { apiAuth } from '../api/apiAuth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
public form:FormGroup;

  constructor(private api: apiservice , private fb: FormBuilder,public apiAuth:apiAuth) { 
    
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
 
  get f() {
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
