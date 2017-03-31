import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { PostsService } from '../../app/Services/post.service';

@Component({
  selector: 'page-page1',
  templateUrl: 'myPolicy.html',
  providers: [PostsService]
})
export class MyPolicy {

  posts: Post[];

  constructor(public navCtrl: NavController, private postsService: PostsService) {
     this.postsService.getIncomeProtection().subscribe(posts => {
        this.posts = posts;
    });
  }

  
    
  }

   interface Post{
    id: number;
    name: string;
    description: string;


}
