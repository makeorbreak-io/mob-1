import { Component } from '@angular/core';
import { NavController, AlertController  } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { SendMoneyPage, HomePage } from '../pages';

@Component({
  selector: 'first-sc',
  templateUrl: 'first-sc.html'
})
export class FirstSC {

  private loginForm : FormGroup;

  constructor(private navCtrl: NavController,
              private alertCtrl: AlertController,
              private formBuilder: FormBuilder) {

                this.loginForm = this.formBuilder.group({
                  name: ['', [Validators.required]],
                  email:['', [ Validators.required, Validators.email]]
                });

  }

ionViewDidLoad(){

}


  register(){
    // send to database the user.name and the user.email and give them a coin for good mesure.
    // TODO: if data is ok save it in sql lite
    
    console.log(this.loginForm);
    this.navCtrl.push(HomePage,  {email : this.loginForm.get("email").value, user : this.loginForm.get("name").value } );
  }
}
