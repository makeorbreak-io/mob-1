import { Component, Renderer } from '@angular/core';
import {  ViewController } from 'ionic-angular';



@Component({
  selector: 'custom-sendByAddress',
  templateUrl: 'custom-sendByAddress.html'
})
export class CustomPopup {

  text: string;

  constructor(public renderer: Renderer, 
              public viewCtrl: ViewController
              ) {
    this.renderer.setElementClass(viewCtrl.pageRef().nativeElement, 'custom-sendByAddress', true);

  }

  popOut(){
    this.viewCtrl.dismiss();
  }

 
}