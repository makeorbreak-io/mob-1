import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
<<<<<<< HEAD

import { HttpModule , Http } from '@angular/http';
=======
import { HTTP } from '@ionic-native/http';
>>>>>>> 2de6464394106c18403bd9d90dce79415a80e057
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
<<<<<<< HEAD

import { IonicStorageModule } from '@ionic/storage';

import { Api } from '../pages/api/shared';
=======
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
>>>>>>> 2de6464394106c18403bd9d90dce79415a80e057
import { SendMoneyPage, FirstSC , CustomPopup } from '../pages/pages';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SQLite } from '@ionic-native/sqlite';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    FirstSC,
    SendMoneyPage,
    CustomPopup
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    FirstSC,
    SendMoneyPage,
    CustomPopup
  ],
  providers: [
    IonicStorageModule,
    StatusBar,
    BarcodeScanner,
    HTTP,
    SplashScreen,
    SQLite,
    Api,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
  exports:[
  ]

})
export class AppModule {}

