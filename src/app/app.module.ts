import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { MyPolicy } from '../pages/myPolicy/myPolicy';
import { PersonalDetails } from '../pages/personalDetails/personalDetails';

import { Contact } from '../pages/contact/contact';
import { Login } from '../pages/login/login';
import { StatementsLettersPage } from '../pages/statements-letters/statements-letters'


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    MyPolicy,
    PersonalDetails,
    Contact,
    Login,
    StatementsLettersPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyPolicy,
    PersonalDetails,
    Contact,
    Login,
    StatementsLettersPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
