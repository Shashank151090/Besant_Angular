import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  registerForm: FormGroup;
  countries = [{ id: 1, name: 'India' }, { id: 2, name: 'USA' }, { id: 3, name: 'UK' }];
  submitted = false;
  ngOnInit() {
    this.registerForm = this.fb.group({
      email: [''],
      password: [''],
      gender: [''],
      country: ['']
    });
  }
  get f() { return this.registerForm.controls; }

  doLogin() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    console.log(this.registerForm.value);
  }
  todo(value: any) {
    switch (value) {
      case 'India':
        // if modo 1 is selected do something.
        console.log('India Clicked');
        break;
      case 'USA':
        // if modo 2 is selected do something.
        console.log('USA Clicked');
        break;
      case 'UK':
        // if modo 3 is selected do something.
        console.log('UK Clicked');
        break;
    }
  }
}
