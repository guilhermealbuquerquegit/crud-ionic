import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { EditaCarroPage } from "../edita-carro/edita-carro";



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
    public af: AngularFireDatabase,
    public modal: ModalController
  
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
    this.modal.create(EditaCarroPage, {id: id}).present();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaCarroPage');
  }

}
