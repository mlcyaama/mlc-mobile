import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CocPastPage } from '../coc-past/coc-past';
import { AlertController } from 'ionic-angular';
/*
  Generated class for the CocNew page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-coc-new',
  templateUrl: 'coc-new.html'
})
export class CocNewPage {


  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CocNewPage');
  }

  newSub(){
    let alert = this.alertCtrl.create({
          title: 'Sucess!',
          subTitle: 'You have sucessfully requested a new Certificate of Currency.',
          buttons: ['OK']
        });
        alert.present();
       this.navCtrl.push(CocPastPage);

    }
   
  
}