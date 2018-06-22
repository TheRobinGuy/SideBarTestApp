import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Info } from '../pages/info/info';
import { ChatPage } from '../pages/chat/chat';

var config = {
  apiKey: "AIzaSyBz-ev_jLT_uyYAkJ48ykGImy5zmXYprCk",
  authDomain: "fitnessapp-db064.firebaseapp.com",
  databaseURL: "https://fitnessapp-db064.firebaseio.com",
  projectId: "fitnessapp-db064",
  storageBucket: "fitnessapp-db064.appspot.com",
  messagingSenderId: "896048530732"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Info,
    ChatPage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,    
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Info,
    ChatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
