import { Component } from '@angular/core';
import { NavController, AlertController  } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { SendMoneyPage, HomePage } from '../pages';

@Component({
  selector: 'first-sc',
  templateUrl: 'first-sc.html'
})
export class FirstSC {

  user = {};

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController) {


  }

ionViewDidLoad(){

}


  register(){
    // send to database the user.name and the user.email and give them a coin for good mesure.
    // TODO: if data is ok save it in sql lite
    
    console.log(this.user);
    this.navCtrl.push(HomePage, this.user);
  }
}
