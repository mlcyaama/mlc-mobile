import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CocNewPage } from '../coc-new/coc-new';
import { CocPastPage } from '../coc-past/coc-past';
import { CocSchedulesPage } from '../coc-schedules/coc-schedules';
/*
  Generated class for the CocNav page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-coc-nav',
  templateUrl: 'coc-nav.html'
})
export class CocNavPage {

   cocLinks = [
      { icon: 'ios-create', title: 'Request New Statement', component: CocNewPage },
      { icon: 'md-list', title: 'Previous Statements', component: CocPastPage },
      { icon: 'ios-time', title: 'Current Schedules', component: CocSchedulesPage },
    ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CocNavPage');
  }

   goToPage(page){
     console.log("Selected Page " + page);
    this.navCtrl.push(page);
  }

}
