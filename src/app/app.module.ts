import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AngularFireModule} from 'angularfire2';
import { FirebaseAppConfig} from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';


import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ListaCarroPage } from "../pages/lista-carro/lista-carro";

const firebaseAppConfig: FirebaseAppConfig = {
    
    apiKey: "AIzaSyABfwjEI3liO-SxDtRlTVT5iswHI1VzJ-c",
    authDomain: "crud-ionic-38768.firebaseapp.com",
    databaseURL: "https://crud-ionic-38768.firebaseio.com",
    projectId: "crud-ionic-38768",
    storageBucket: "",
    messagingSenderId: "648709846884"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    ListaCarroPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    //Inicializando Angularfire no Ionic
    AngularFireModule.initializeApp(firebaseAppConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    ListaCarroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
