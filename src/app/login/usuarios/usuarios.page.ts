import { Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { NavController,  MenuController } from '@ionic/angular';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage  {
  // Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.


  constructor(public navCtrl: NavController,private menuController: MenuController) { }



  // Cuando entre a login bloquea el menu

  ionViewWillEnter() {
    this.menuController.enable(false);
  }

  // despues de dejar login activa el menu
  ionViewWillLeave() {
    this.menuController.enable(true);
  }


  iniciarSesion() {
    this.navCtrl.navigateRoot('noticias');
  }
}
