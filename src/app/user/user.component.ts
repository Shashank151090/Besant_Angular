import { Component, OnInit } from '@angular/core';
import { DataTransferService } from '../../data-transfer.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

    constructor(private dataTransfer: DataTransferService, private router: Router) { }
    userDetails: {};
    userId: any;
    userAvatar = 'assets/images/users/male.png';

    ngOnInit() {
        this.getUserData();
    }
    getUserData() {
        this.userDetails = this.dataTransfer.userDetails;
    }
    viewPosts() {
        this.router.navigate(['/user/posts']);
    }
    deleteData(data) {
        alert(data.email + "'s Message deleted")
    }
}
