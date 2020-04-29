import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController,  MenuController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {

  constructor(public navCtrl: NavController,private menuController: MenuController) { }

  signupView: boolean = false

  toggleSignUpView () {
    this.signupView = !this.signupView;
  }

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

  altaUsuario() {
    this.navCtrl.navigateRoot('login/usuarios');
  }
}
