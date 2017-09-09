import { Component } from '@angular/core';
import { NavController, AlertController , ToastController , LoadingController  } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Api } from '../api/shared';

import { Storage } from '@ionic/storage';

import { SendMoneyPage, HomePage} from '../pages';

@Component({
  selector: 'first-sc',
  templateUrl: 'first-sc.html'
})
export class FirstSC {

  private loginForm : FormGroup;

  constructor(private navCtrl: NavController,
              private alertCtrl: AlertController,
              private formBuilder: FormBuilder,
              private storage: Storage,
              private toastCtrl: ToastController,
              private api : Api,
              private loadCtrl: LoadingController) {

                this.loginForm = this.formBuilder.group({
                  name: ['', [Validators.required]],
                  email:['', [ Validators.required, Validators.email]],
                  pass: ['', [Validators.required]],
                });

  }

ionViewDidLoad(){

}

  code: any;

  async register(){
    // send to database the user.name and the user.email and give them a coin for good mesure.
    // TODO: if data is ok save it in sql lite
    
    let loader = this.loadCtrl.create({
      content: '<b> Loading Data... </b>'
    });
    
    loader.present().then(() => {
  
      let email = this.loginForm.get("email").value;
      let pass = this.loginForm.get("pass").value;
      let name =  this.loginForm.get("name").value;
  
       this.api.createAccount(email , pass)
        .then((data) =>{

          this.code = data;

          // this looks fine
          // console.log('DATA',data);
           console.log('Code',this.code);

           this.storage.set('publicKey',  this.code).then(x => x);
           this.storage.set('userName', name).then(x => x);
           this.storage.set('email', email).then(x => x);

        });
  
      this.storage.get("publicKey").then(d => console.log('then ->',d));

      sleep(3000);
      loader.dismiss();

      this.navCtrl.push(HomePage,  {email : email, user : name , code: this.code } );
    
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

}
