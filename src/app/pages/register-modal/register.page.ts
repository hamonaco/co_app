import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../models/usuario';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  usuario: Usuario = {
    email: '',
    password: '',
  };

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }
  onClick() {
    console.log(this.usuario);
  }

  cancelarModal() {
    this.modalController.dismiss();
  }

  registerOk() {
    this.modalController.dismiss({
      usuario: this.usuario
    });
  }
}
