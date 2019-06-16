import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../../api.service';

@Component({
    selector: 'app-user-comments',
    templateUrl: './userComments.component.html',
    styleUrls: ['./userComments.component.css']
})
export class UserCommentsComponent implements OnInit {

    constructor(private apiService: ApiService) { }
    @Input() userDetails;
    @Output() delete = new EventEmitter();
    comments: any;
    ngOnInit() {
        this.getUserComments(this.userDetails.id)
    }
    getUserComments(id) {
        this.apiService.getUserComments(id)
            .subscribe(
                (result: any) => {
                    this.comments = result;
                }

            );
    }

    deleteComment(comment) {
        this.delete.emit(comment);
    }
}
