import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../models/usuario';
import {AlertController, LoadingController, ModalController} from '@ionic/angular';
import {AuthService} from '../../services/auth.service';
import {AlertService} from '../../services/alert.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  usuario: Usuario = {email: '' , password: '', username: ''}

  constructor(private alertController: AlertController, private alert: AlertService ,private modalController: ModalController, private authService: AuthService, private loadingController: LoadingController) { }

  ngOnInit() {
  }
  onClick() {
    console.log(this.usuario);
  }

  cancelarModal() {
    this.modalController.dismiss();
  }

  async registerOk() {

    let alert = await this.alertController.create({
      header : 'Registro Correcto',
      message: 'Ingresa a tu correo y finaliza el proceso de registro',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.modalController.dismiss();
          }
        }]});
    let loading = await this.loadingController.create({
      message: 'Cargando...',
      spinner: 'crescent'
    });
    await loading.present();
    this.authService.registroUsuario(this.usuario.email, this.usuario.password, this.usuario.username)
        .subscribe(() => {
          alert.present();

        }, error => {

            this.alert.alertConOk('Error', 'Ocurrio un error durante el registro. Vuelva a intentarlo')
        })
    await loading.dismiss();
  }
}
