import { Injectable } from '@angular/core';
import {AlertController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private alertController: AlertController) { }

  async alertConOk(title: string, msg: string) {

      const alert = await this.alertController.create({
        header: title,
        message: msg,
        buttons: ['OK']
      });

      await alert.present();

  }



}
