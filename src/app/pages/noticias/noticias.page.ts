import { Component, OnInit } from '@angular/core';
import { AlertasService } from './../../services/alertas/alertas.service';
@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {

  constructor(private alert: AlertasService) { }

  ngOnInit() {
  }



  crearNoticia(){
    this.alert.presentAlert("¡Cuidado!","aun no se puede crear publicaciones");
  }

}
