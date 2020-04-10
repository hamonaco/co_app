import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../models/usuario';
import {AlertController, LoadingController, ModalController, NavController} from '@ionic/angular';
import {RegisterPage} from '../register-modal/register.page';
import {AuthService} from '../../services/auth.service';
import {error} from 'util';
import {AlertService} from '../../services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario: Usuario = {email: '' , password: ''};

  constructor(private modalController: ModalController,
              private navController: NavController,
              private authService: AuthService,
              private loadingController: LoadingController,
              private alertService: AlertService) { }

  ngOnInit() {
  }

  onClick() {
    console.log(this.usuario);
  }

  async openRegisterModal() {
    const modal = await this.modalController.create({
      component: RegisterPage
    });
    await modal.present();

    const {data} = await modal.onWillDismiss();
  console.log(data)
  }


  async loginService() {
    let loading = await this.loadingController.create({
      message: 'Cargando...',
      spinner: 'crescent'
    });
    await loading.present();
    this.authService.login(this.usuario.email, this.usuario.password).then(res => {
      if (res == true){
        this.navController.navigateForward('/home')
      }else{
      switch (res['status']) {
        case 400: {
          this.alertService.alertConOk('Error!','Su email y/o contraseña son incorrectos')
          break;
        }
        case 500: {
          this.alertService.alertConOk('Error!','Ocurrio un error en el servidor, intente mas tarde')
          break;
        }
        default: {
          this.alertService.alertConOk('Error!','Ocurrio un error inesperado')
          break;
        }
      }}
      loading.dismiss();
    })
  }

}
