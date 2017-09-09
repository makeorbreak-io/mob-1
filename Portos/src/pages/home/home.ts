import { Component } from '@angular/core';
import { NavController, AlertController , NavParams } from 'ionic-angular';

import { SendMoneyPage, FirstSC } from '../pages';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private navCtrl: NavController,
              private alertCtrl: AlertController,
              private navParams: NavParams) {

  }

  ionViewWillEnter()
{

  console.log(this.navParams.data);

  if(this.navParams.data.email === undefined){
      this.navCtrl.push(FirstSC);
    }
 
}

  SendMoney(){

  }

  BuyMoney()
  {

    let confirm = this.alertCtrl.create({
      
      title: 'Do you want to Support this ideia?',
      message: 'Portos',
      
      buttons: [
        {
          
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });

    confirm.present();
  }

}
