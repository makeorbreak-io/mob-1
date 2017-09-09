import { Component } from '@angular/core';
import { NavController, AlertController , ToastController   } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';


import { SendMoneyPage, HomePage } from '../pages';

@Component({
  selector: 'first-sc',
  templateUrl: 'first-sc.html'
})
export class FirstSC {

  private loginForm : FormGroup;

  constructor(private navCtrl: NavController,
              private alertCtrl: AlertController,
              private formBuilder: FormBuilder,
              private sqlite: SQLite,
              private toastCtrl: ToastController) {

                this.loginForm = this.formBuilder.group({
                  name: ['', [Validators.required]],
                  email:['', [ Validators.required, Validators.email]],
                  pass: ['', [Validators.required]],
                });

  }

ionViewDidLoad(){

}


  register(){
    // send to database the user.name and the user.email and give them a coin for good mesure.
    // TODO: if data is ok save it in sql lite
    
    console.log(this.loginForm);
    this.navCtrl.push(HomePage,  {email : this.loginForm.get("email").value, user : this.loginForm.get("name").value } );

    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
    
        db.executeSql('create table dados(name VARCHAR(250))', {})
          .then(() => 
            this.toastCtrl.create({
              message: 'Created Database!',
              duration: 3000,
              position: 'bottom'
            }).present())

          .catch(e => console.log(e));
    
      })
      .catch(e => console.log(e));

//Http call to http://portoscoins.azurewebsites.net with email and pass 


  }
}
