import { Component } from '@angular/core';
import { NavController, AlertController , NavParams , ModalController , LoadingController , ToastController } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

import { SendMoneyPage, FirstSC, CustomPopup } from '../pages';

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
              private sqlite: SQLite,
              private toastCtrl: ToastController) {

  }

  private options = { name: "data.db", location: 'default', createFromLocation: 1 };
  private queryDatabase= "SELECT * FROM dados";

  ionViewWillEnter()
{



  let loader = this.load.create({
    content: '<b> Loading Data... </b>'
  });
  
  loader.present().then(() => {

    this.sqlite.create(this.options).then((db: SQLiteObject) => {
      db.executeSql(this.queryDatabase, {}).then((data) => {

        this.toastCtrl.create({
          message: 'Data: ' + data,
          duration: 10000,
          position: 'bottom'
        }).present()
        
        if(data === undefined)
        {
          this.navCtrl.push(FirstSC);
        }
      })
    });

      loader.dismiss();
  });

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
