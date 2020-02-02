import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../models/usuario';
import {ModalController, NavController} from '@ionic/angular';
import {RegisterPage} from '../register-modal/register.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario: Usuario = {email: '' , password: ''};

  constructor(private modalController: ModalController, private navController: NavController) { }

  ngOnInit() {
  }

  onClick() {
    console.log(this.usuario);
  }

  async openRegisterModal(){
    const modal = await this.modalController.create({
      component: RegisterPage
    });
    await modal.present();

    const {data} = await modal.onWillDismiss();
    console.log(data);
  }

  openHomePage(){
    this.navController.navigateForward('/home');
  }

}
