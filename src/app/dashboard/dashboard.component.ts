import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';
import { DataTransferService } from '../../data-transfer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private apiService: ApiService, private datatransfer: DataTransferService, private router: Router) { }
  users: any[] = [];
  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.apiService.getData()
      .subscribe(
        (result: any) => {
          this.users = result;
        }

      );
  }

  viewProfile(user) {
    this.datatransfer.userData(user);
    this.router.navigate(['/user']);
  }

}
