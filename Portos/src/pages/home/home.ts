import { Component } from '@angular/core';
import { NavController, AlertController , NavParams , ModalController , LoadingController , ToastController } from 'ionic-angular';

import { SendMoneyPage, FirstSC, CustomPopup } from '../pages';
import { Storage } from '@ionic/storage';

import { Api } from '../api/shared';


import { NavController , NavParams , ModalController , LoadingController , ToastController } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

import { FirstSC, CustomPopup } from '../pages';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private navCtrl: NavController,
              private navParams: NavParams,
              private modalCtrl: ModalController,
              private load: LoadingController,
              private toastCtrl: ToastController,
              private storage: Storage,
              private api: Api) {

  }


  data :any;
  myBalance:any;
  ionViewWillEnter()
{

  let loader = this.load.create({
    content: '<b> Loading Data... </b>'
  });
  sleep(1500);
  
  loader.present().then(() => {
   
    this.getpublicKey().then(o => {
      
      console.log(o);
      if(o === undefined || o == null)
      {
        this.navCtrl.push(FirstSC);
      }
        
      this.api.getMyBalance(o).then(x => {
        this.myBalance = x;
       });
  
    });

    loader.dismiss();
    
  });
  
  function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }
}

 async getpublicKey()
 {
   return await this.storage.get("publicKey");
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
