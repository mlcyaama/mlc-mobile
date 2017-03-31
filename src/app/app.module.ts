import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';


import {HttpModule} from '@angular/http';


import { MyApp } from './app.component';
import { MyPolicy } from '../pages/myPolicy/myPolicy';
import { PersonalDetails } from '../pages/personalDetails/personalDetails';

import { StatementsLettersPage } from '../pages/statements-letters/statements-letters';

import { CocNavPage } from '../pages/coc-nav/coc-nav';
import { CocNewPage } from '../pages/coc-new/coc-new';
import { CocPastPage } from '../pages/coc-past/coc-past';
import { CocSchedulesPage } from '../pages/coc-schedules/coc-schedules';

import { PolicySchedulePage } from '../pages/policy-schedule/policy-schedule';
import { CorrespondencePage } from '../pages/correspondence/correspondence';
import { PremiumsPaidPage } from '../pages/premiums-paid/premiums-paid';

import { Contact } from '../pages/contact/contact';
import { Login } from '../pages/login/login';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    MyPolicy,
    PersonalDetails,
    StatementsLettersPage,
    PolicySchedulePage,
    CocNavPage,
    CocPastPage,
    CocSchedulesPage,
    CocNewPage,
    Contact,
    Login,
    PremiumsPaidPage,
    CorrespondencePage

  ],
  imports: [
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyPolicy,
    PersonalDetails,
    StatementsLettersPage,
    PolicySchedulePage,
    CocNavPage,
    CocPastPage,
    CocSchedulesPage,
    CocNewPage,
    Contact,
    Login,
    CorrespondencePage,
    PremiumsPaidPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
