import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ListaCarroPage } from "../pages/lista-carro/lista-carro";

export const firebaseConfig = {
    
    apiKey: "AIzaSyCp2xAuHDurIxjnAKa2el8tqW6nQDpY-vY",
    authDomain: "ionic-crud-d1f7c.firebaseapp.com",
    databaseURL: "https://ionic-crud-d1f7c.firebaseio.com",
    projectId: "ionic-crud-d1f7c",
    storageBucket: "ionic-crud-d1f7c.appspot.com",
    messagingSenderId: "657981561547"
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
    AngularFireModule.initializeApp(firebaseConfig),
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
