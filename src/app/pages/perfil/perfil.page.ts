import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ModalController } from '@ionic/angular';

import { EditPage } from './edit/edit.page';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(private camera: Camera,public modalController: ModalController) { }
  image:string ="https://image.flaticon.com/icons/svg/163/163801.svg";

  ngOnInit() {
  }
  changephoto(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
     this.image =(<any>window).Ionic.WebView.convertFileSrc(imageData);
     let base64Image = 'data:image/jpeg;base64,' + imageData;

    }, (err) => {
     // Handle error
     alert("error "+JSON.stringify(err))
    });

  }


  

  async editModal() {
    const modal = await this.modalController.create({
      component: EditPage
    });
    return await modal.present();
  }
}
