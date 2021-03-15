import {Component, OnInit} from '@angular/core';
import {HomeOption} from '../../models/homeOption';
import {Nav} from '../../services/nav.service';
import {DataService} from '../../services/data.service';
import {AuthService} from '../../services/auth.service';
import {AlertService} from '../../services/alert.service';
import {AlertController} from '@ionic/angular';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  opciones : Array<HomeOption> = [];


  constructor(private nav: Nav, private dataService: DataService, private authService: AuthService, private alertController: AlertController) {}

  async ngOnInit() {
    await this.dataService.getHomeOptions().then(res => {
      this.opciones = res;
      console.log(res);
    });
  }

  async logout(){
      const alert = await this.alertController.create({
        header: 'Cuidado!',
        message: '¿Esta seguro que desea cerrar seesion?',
        buttons: [
          {
            text: 'Si',
            handler: () => {
              this.dataService.paginaOferta = 0;
              this.authService.logout();
            }
          },
          {
            text: 'No',
            role: 'cancel'
          }
        ]
      });

      await alert.present();
    };


  navigateTo(opcion: HomeOption) {
    this.dataService.paginaOferta = -1;
    return this.nav.push('familia', opcion);
  }

}
