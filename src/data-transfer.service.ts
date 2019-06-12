import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  constructor() { }
  userDetails: any;

  userData(user) {
    this.userDetails = user;
    console.log('data in service', this.userDetails);
  }
}
