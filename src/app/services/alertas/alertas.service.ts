import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  constructor(private alertController: AlertController) { }

  async presentAlert(textHeader ,mensaje) {

    const alert = await this.alertController.create({
      header: textHeader,
      subHeader: " ",
      message: mensaje,
      buttons: ['Aceptar']
    });



    await alert.present();
  }

  async presentAlertInput(textHeader ,mensaje) {

    const alert = await this.alertController.create({
      header: textHeader,
      subHeader: "",
      message: mensaje,
      inputs:[
        {
          name: 'Escribe el codigo',
          type: "password",
          placeholder: 'Escribe el'

        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });



    await alert.present();
  }

 
}
