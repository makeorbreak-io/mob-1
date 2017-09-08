import { Component } from '@angular/core';
import { NavController, AlertController  } from 'ionic-angular';

import { SendMoneyPage } from '../pages';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController) {


  }

ionViewDidLoad()
{
  
}

  SendMoney()
  {

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
