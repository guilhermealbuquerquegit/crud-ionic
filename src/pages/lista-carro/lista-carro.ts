import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the ListaCarroPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()  

export class Carro{
  id: string;
  dono: string;
  modelo: string;
  multa: boolean
}


@Component({
  selector: 'page-lista-carro',
  templateUrl: 'lista-carro.html',
})
export class ListaCarroPage {

  lista: FirebaseListObservable<any>;
  carro: Carro;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public af: AngularFireDatabase
  
  ) {
    this.lista = this.af.list('/carros');
    this.carro = new Carro();
  }


   cadastrar(){
      this.lista.push(this.carro).then(() => {
      this.carro = new Carro();
    });
  }

  editar(id){

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaCarroPage');
  }

}