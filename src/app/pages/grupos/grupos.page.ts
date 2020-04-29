import { Component, OnInit } from '@angular/core';

import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { AlertasService} from '../../services/alertas/alertas.service';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.page.html',
  styleUrls: ['./grupos.page.scss'],
})
export class GruposPage implements OnInit {

  scannedData: any;
  encodedData: '';
  encodeData: any;
  
  constructor(
   private barcodeScanner: BarcodeScanner,
   private alert: AlertasService
    ) { }
    
  ngOnInit() {
  
  }

  
  addGruop(){
    this.alert.presentAlert("¡Alerta!","Se agrego correctamente");
  }
  

  getGroupsByNumber(ev: any){

  }
  
  goToBarcodeScan() {
    const options: BarcodeScannerOptions = {
      preferFrontCamera: true,
      showFlipCameraButton: false,
      showTorchButton: true,
      torchOn: false,
      prompt: 'Por favor escanea',
      resultDisplayDuration: 500,
      formats: 'QR_CODE,PDF_417 ',
      orientation: 'landscape',
    };

    this.barcodeScanner.scan(options).then(barcodeData => {

      alert(barcodeData);
      this.scannedData = barcodeData;

      this.getGroupsByNumber(barcodeData);

    }).catch(err => {
      console.log('Error', err);
    });
  }


}
