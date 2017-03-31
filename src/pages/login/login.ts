import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MyPolicy } from '../myPolicy/myPolicy';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class Login {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }
  
  goToPage(page){

   
      this.navCtrl.push(MyPolicy);
      this.navCtrl.setRoot(MyPolicy);
    
  }
  
  

}
