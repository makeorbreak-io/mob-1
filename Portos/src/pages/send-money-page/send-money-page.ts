import { Component } from '@angular/core';
import { NavController, AlertController  } from 'ionic-angular';

@Component({
  templateUrl: 'send-money-page.html'
})
export class SendMoneyPage {

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController) {

  }

}