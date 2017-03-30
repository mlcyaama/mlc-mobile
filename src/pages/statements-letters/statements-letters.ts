import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CocNavPage } from '../coc-nav/coc-nav';
import { PolicySchedulePage } from '../policy-schedule/policy-schedule';
import { CorrespondencePage } from '../correspondence/correspondence';
import { PremiumsPaidPage } from '../premiums-paid/premiums-paid';
import { RenewalNoticePage } from '../renewal-notice/renewal-notice';
/*
  Generated class for the StatementsLetters page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

@Component({
  selector: 'page-statements-letters',
  templateUrl: 'statements-letters.html'
})

export class StatementsLettersPage {

    itemLinks = [
      { icon: 'ios-create', title: 'Certificate of Currency', component: CocNavPage },
      { icon: 'md-list', title: 'Renewal Notice', component: RenewalNoticePage },
      { icon: 'ios-time', title: 'Policy Schedule', component: PolicySchedulePage },
      { icon: 'ios-cash', title: 'Premiums Paid', component: PremiumsPaidPage },
      { icon: 'ios-book', title: 'Other Correspondence', component: CorrespondencePage },
    ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatementsLettersPage');
  }

  goToPage(page){

   
      this.navCtrl.push(page);
    
   
   //this.navCtrl.push(page);

    console.log("Selected Page : " + page);
  }

}
