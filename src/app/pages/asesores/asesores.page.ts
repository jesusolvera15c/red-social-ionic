import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PerfilPage } from './perfil/perfil.page';
@Component({
  selector: 'app-asesores',
  templateUrl: './asesores.page.html',
  styleUrls: ['./asesores.page.scss'],
})
export class AsesoresPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }


  open(){
    alert("hola");
  }

  
  async viewPerfilModal() {
    const modal = await this.modalController.create({
      component: PerfilPage
    });
    return await modal.present();
  }
}
