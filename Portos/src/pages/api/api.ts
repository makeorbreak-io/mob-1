import { Injectable } from '@angular/core';
import { Http  } from '@angular/http';
import {  ToastController   } from 'ionic-angular';

@Injectable()
export class Api{

    constructor(private http : Http,
                private toastCtrl: ToastController) {
        
    }

    async  createAccount(email, pass){
         return await new Promise(resolve => 
        {
            this.http.get("http://portoscoins.azurewebsites.net/api/Portos?email="+email+"&password="+pass)
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

    async  getMyBalance(key){
        return await new Promise(resolve => 
            {
                this.http.get("http://portoscoins.azurewebsites.net/api/Portos?accountId=" + key)
                .subscribe(res => resolve(res.json()));
            });
    }


}