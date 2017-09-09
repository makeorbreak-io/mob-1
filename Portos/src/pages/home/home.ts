import { Component } from '@angular/core';
import { NavController, AlertController , NavParams , ModalController} from 'ionic-angular';

import { SendMoneyPage, FirstSC, CustomPopup } from '../pages';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private navCtrl: NavController,
              private alertCtrl: AlertController,
              private navParams: NavParams,
              private modalCtrl: ModalController) {

  }

  ionViewWillEnter()
{

  console.log(this.navParams.data);

  if(this.navParams.data.email === undefined){
      this.navCtrl.push(FirstSC);
    } 
 
}

requestTokens(){

    let modal = this.modalCtrl.create(CustomPopup,
      {
        
      },
      {
        showBackdrop:true, 
        enableBackdropDismiss:true

      });

    modal.present();  

}


  SendByAddress(){
    // Get the others address 
    // Get money to be sent
    // Confirm
    // $_$
    

  }

}
