import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder, private apiService: ApiService) { }
  registerForm: FormGroup;
  countries = [{ id: 1, name: 'India' }, { id: 2, name: 'USA' }, { id: 3, name: 'UK' }];
  submitted = false;
  ngOnInit() {
    this.registerForm = this.fb.group({
      name: [''],
      username: [''],
      email: [''],
      address: this.fb.group({
        street: [''],
        suite: [''],
        city: ['']
      }),
      phone: [''],
      website: [''],
      company: this.fb.group({
        name: ['']
      })
    });
  }
  get f() { return this.registerForm.controls; }

  doLogin() {
    this.submitted = true;
    this.apiService.addUser(this.registerForm.value)
      .subscribe(
        (result: any) => {
          console.log(result);
        },
        error  => {
        console.log("Error", error);
        }

      );
  }
}
