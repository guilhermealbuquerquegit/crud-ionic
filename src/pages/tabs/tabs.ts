import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { ListaCarroPage } from "../lista-carro/lista-carro";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ListaCarroPage;


  constructor() {

  }
}
