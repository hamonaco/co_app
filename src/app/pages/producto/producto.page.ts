import { Component, OnInit } from '@angular/core';
import {Nav} from '../../services/nav.service';
import {Producto} from '../../models/producto';
import {ModalController, NavController} from '@ionic/angular';
import {LocalizacionPage} from '../localizacion/localizacion.page';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {

  producto: Producto;

  constructor(private nav: Nav, private navController: NavController, private modalController:ModalController) { }

  ngOnInit() {
this.producto = this.nav.get();
console.log(this.producto);
  }

  async openRegisterModal() {
    const modal = await this.modalController.create({
      component: LocalizacionPage,
      componentProps:{
        localizacion: {lat: '48.858093', lng: '2.294694', dragable: false}
      }
    });
    await modal.present();
  }

}
