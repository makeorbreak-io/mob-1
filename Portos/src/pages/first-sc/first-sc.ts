import { Component } from '@angular/core';
import { NavController, AlertController  } from 'ionic-angular';

import { SendMoneyPage } from '../pages';

@Component({
  selector: 'first-sc',
  templateUrl: 'first-sc.html'
})
export class FirstSC {

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController) {


  }

ionViewDidLoad(){
  
}

}
