import { Component, OnInit, OnDestroy, AfterContentInit, AfterViewInit, OnChanges, DoCheck, AfterViewChecked, AfterContentChecked } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit, OnDestroy, AfterContentInit,
  AfterViewInit, OnChanges, DoCheck, AfterViewChecked, AfterContentChecked {

  data = 100;
  constructor(private router: Router) {
    console.log(`new - data is ${this.data}`);
  }
  ngOnChanges() {
    console.log(`ngOnChanges - data is ${this.data}`);
  }
  ngOnInit() {
    console.log(`ngOnInit  - data is ${this.data}`);
  }
  ngDoCheck() {
    console.log('ngDoCheck');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
  addNumber(): void {
    this.data += 100;
  }
  deleteNumber(): void {
    this.data -= 10;
  }
  gotoNext(): void {
    this.router.navigate(['/new']);
  }
}
