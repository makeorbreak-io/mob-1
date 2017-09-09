import { Component, Renderer } from '@angular/core';
import {  ViewController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { HTTP } from '@ionic-native/http';


@Component({
  selector: 'custom-popup',
  templateUrl: 'custom-popup.html'
})
export class CustomPopup {

  text: string;

  constructor(public renderer: Renderer, 
              public viewCtrl: ViewController,
              public barcodeScanner: BarcodeScanner,
              private http: HTTP) {
    this.renderer.setElementClass(viewCtrl.pageRef().nativeElement, 'custom-popup', true);

  }

  popOut(){
    this.viewCtrl.dismiss();
  }

  scanQR(){
    this.barcodeScanner.scan().then((barcodeData) => {
      // Success! Barcode data is here
     }, (err) => {
         // An error occurred
     });
  }

  getQR(code){
    var url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+code;

    this.http.get(url, {}, {})
    .then(data => {
    var qr = data.data; // data received by server
  
    })
    .catch(error => {
  
      var qrerror = error.error; // error message as string
  
    });
    
  }
}