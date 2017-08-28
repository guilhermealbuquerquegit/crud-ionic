import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { Carro } from "../lista-carro/lista-carro";

/**
 * Generated class for the EditaCarroPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edita-carro',
  templateUrl: 'edita-carro.html',
})
export class EditaCarroPage {
  viewCtrl: any;
  ref: FirebaseObjectObservable<any>;
  id: string;
  carro: Carro; 

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public af: AngularFireDatabase) {

      this.id = this.navParams.get('id');
      this.ref = this.af.object('/carros/' + this.id);
  }
  
  
  
  salvar(){    
    this.ref.update(this.carro).then(() => {
       this.viewCtrl.dismiss();
    });    
  }


  fechar(){
    this.viewCtrl.dismiss();
  }

  excluir(id){
    this.ref.remove();
    this.viewCtrl.dismiss();
  }   


  ionViewDidLoad() {
    console.log('ionViewDidLoad EditaCarroPage');
  }

}
