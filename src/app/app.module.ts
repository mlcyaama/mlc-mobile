import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { MyPolicy } from '../pages/myPolicy/myPolicy';
import { PersonalDetails } from '../pages/personalDetails/personalDetails';
<<<<<<< HEAD
import { StatementsLettersPage } from '../pages/statements-letters/statements-letters';

import { CocNavPage } from '../pages/coc-nav/coc-nav';
import { CocNewPage } from '../pages/coc-new/coc-new';
import { CocPastPage } from '../pages/coc-past/coc-past';
import { CocSchedulesPage } from '../pages/coc-schedules/coc-schedules';

import { PolicySchedulePage } from '../pages/policy-schedule/policy-schedule';
=======

import { Contact } from '../pages/contact/contact';
import { Login } from '../pages/login/login';
import { StatementsLettersPage } from '../pages/statements-letters/statements-letters'
>>>>>>> 5f6d38ae0b74db984bd2c14d315a05f45651d135


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    MyPolicy,
    PersonalDetails,
<<<<<<< HEAD
    StatementsLettersPage,
    PolicySchedulePage,
    CocNavPage,
    CocPastPage,
    CocSchedulesPage,
    CocNewPage,
    
=======
    Contact,
    Login,
    StatementsLettersPage
>>>>>>> 5f6d38ae0b74db984bd2c14d315a05f45651d135
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyPolicy,
    PersonalDetails,
<<<<<<< HEAD
    StatementsLettersPage,
    PolicySchedulePage,
    CocNavPage,
    CocPastPage,
    CocSchedulesPage,
    CocNewPage
=======
    Contact,
    Login,
    StatementsLettersPage
>>>>>>> 5f6d38ae0b74db984bd2c14d315a05f45651d135

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
