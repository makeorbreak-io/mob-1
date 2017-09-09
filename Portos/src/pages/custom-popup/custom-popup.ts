import { Component, Renderer } from '@angular/core';
import {  ViewController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';



@Component({
  selector: 'custom-popup',
  templateUrl: 'custom-popup.html'
})
export class CustomPopup {

  text: string;

  constructor(public renderer: Renderer, 
              public viewCtrl: ViewController,
              public barcodeScanner: BarcodeScanner
              ) {
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
}