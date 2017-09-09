import { Component } from '@angular/core';
import { NavController, AlertController , NavParams , ModalController , LoadingController , ToastController } from 'ionic-angular';

import { SendMoneyPage, FirstSC, CustomPopup } from '../pages';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private navCtrl: NavController,
              private alertCtrl: AlertController,
              private navParams: NavParams,
              private modalCtrl: ModalController,
              private load: LoadingController,
              private toastCtrl: ToastController,
              private storage: Storage) {

  }


  ionViewWillEnter()
{

  let loader = this.load.create({
    content: '<b> Loading Data... </b>'
  });
  
  loader.present().then(() => {

    var data = this.storage.get("publicKey");
        
    //console.log(data);

        if(data === undefined)
        {
          this.navCtrl.push(FirstSC);
        }

      loader.dismiss();
  });


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
