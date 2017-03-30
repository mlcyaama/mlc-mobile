import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyPolicy } from '../pages/myPolicy/myPolicy';
import { PersonalDetails } from '../pages/personalDetails/personalDetails';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = MyPolicy;

  pages: Array<{icon: string, title: string, component: any}>;

  constructor(public platform: Platform, public statusBar : StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();


    // used for an example of ngFor and navigation
      this.pages = [
      { icon: 'contact', title: 'My policy', component: MyPolicy },
      { icon: 'call', title: 'Personal details', component: PersonalDetails },
      { icon: 'mail', title: 'Statements and letters', component: MyPolicy },
      { icon: 'call', title: 'Information', component: MyPolicy },
      { icon: 'power', title: 'Logout', component: MyPolicy },
    ];
  
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
