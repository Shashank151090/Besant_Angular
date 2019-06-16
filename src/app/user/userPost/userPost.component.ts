import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../../api.service';

@Component({
    selector: 'app-user-post',
    templateUrl: './userPost.component.html',
    styleUrls: ['./userPost.component.css']
})
export class UserPostComponent implements OnInit {

    constructor(private apiService: ApiService) { }
    @Input() userDetails;
    @Input() userDetailsid;
    posts: any;
    ngOnInit() {
        this.getUserPosts(this.userDetails.id);
        console.log('new id', this.userDetailsid);
    }
    getUserPosts(id) {
        this.apiService.getUserPosts(id)
            .subscribe(
                (result: any) => {
                    this.posts = result;
                }

            );
    }
}
