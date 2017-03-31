import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PostsService } from '../../app/Services/post.service';

/*
  Generated class for the CocPast page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-coc-past',
  templateUrl: 'coc-past.html',
  providers: [PostsService]
})
export class CocPastPage {

    posts: Post[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private postsService: PostsService) {
      this.postsService.getIncomeProtection().subscribe(posts => {
        this.posts = posts;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CocPastPage');
  }
}

    interface Post{
    id: number;
    name: string;
    description: string;

}
