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
import { EditaCarroPage } from "../pages/edita-carro/edita-carro";



const firebaseAppConfig: FirebaseAppConfig = {
    
  apiKey: "AIzaSyDJRxBnmEtXLfZM9d0XWCP5kWSjL92wVxI",
  authDomain: "crud-ionic-3efcf.firebaseapp.com",
  databaseURL: "https://crud-ionic-3efcf.firebaseio.com",
  projectId: "crud-ionic-3efcf",
  storageBucket: "crud-ionic-3efcf.appspot.com",
  messagingSenderId: "895951728781"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    ListaCarroPage,
    EditaCarroPage
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
    ListaCarroPage,
    EditaCarroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
