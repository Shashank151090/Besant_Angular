import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any = []
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.apiService.getPosts()
      .subscribe(
        (result: any) => {
          this.posts = result;
          console.log(this.posts);
        }

      );
  }

}
