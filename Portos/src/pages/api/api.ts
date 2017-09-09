import { Injectable } from '@angular/core';
import { Http  } from '@angular/http';
import {  ToastController   } from 'ionic-angular';

@Injectable()
export class Api{

    /**
     *
     */
    constructor(private http : Http,
                private toastCtrl: ToastController) {
        
    }

    createAccount(email, pass){
        return new Promise(resolve => 
        {
            this.http.get("http://http://portoscoins.azurewebsites.net/api/Portos?email="+email+"&password="+pass)
            .subscribe(res => resolve(res.json()),
            error=>{
                this.toastCtrl.create({
                    message: error,
                    duration: 3000,
                    position: 'bottom'
                  }).present()

                return "";
            });
        });
    }

    getMyBalance(key){
        return new Promise(resolve => 
            {
                this.http.get("http://portoscoins.azurewebsites.net/api/Portos?accountId=" + key)
                .subscribe(res => resolve(res.json()));
            });
    }

    getQR(code){
        return new Promise (data => {this.http.get("https://unitag-qr-code-generation.p.mashape.com/api?data=%7B%22TYPE%22%3A%22text%22%2C%22DATA%22%3A%7B%22TEXT%22%3A%22"+code+"%22%7D%7D&setting=%7B%22LAYOUT%22%3A%7B%22COLORBG%22%3A%222105A3%22%2C%22GRADIENT_TYPE%22%3A%22NR%22%2C%22COLOR1%22%3A%22000000%2O_G2%7D%2C%22EYES%22%3A%7B%22EYE_TYPE%22%3A%22Simple%22%7D%2C%22E%22%3A%22M%22%2C%22BODY_TYPE%22%3A0%7D")
        .subscribe(data => data);
        });
    }


}