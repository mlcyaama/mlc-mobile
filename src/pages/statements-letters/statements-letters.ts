import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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
      { icon: 'ios-create', title: 'Certificate of Currency', component: 'CocNavPage' },
      { icon: 'md-list', title: 'Payment Notice', component: '' },
      { icon: 'ios-time', title: 'Policy Schedule', component: '' },
      { icon: 'ios-cash', title: 'Premiums Paid', component: '' },
      { icon: 'ios-book', title: 'Other Correspondence', component: '' },
    ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatementsLettersPage');
  }

  goToPage(page){
   this.navCtrl.push(page);

    console.log("Selected Page : " + page);
  }

}