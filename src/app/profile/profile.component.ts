import { Component, OnInit } from '@angular/core';
import { DataTransferService } from '../../data-transfer.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private dataTransfer: DataTransferService) { }
  userDetails: {};
  userAvatar = 'assets/images/users/male.png';

  ngOnInit() {
    this.getUserData();
  }
  getUserData() {
    this.userDetails = this.dataTransfer.userDetails;
    console.log('data in profile', this.userDetails)
  }
}
