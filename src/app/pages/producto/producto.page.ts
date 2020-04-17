import { Component, OnInit } from '@angular/core';
import {Nav} from '../../services/nav.service';
import {Producto} from '../../models/producto';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {

  producto: Producto;

  constructor(private nav: Nav, private navController: NavController) { }

  ngOnInit() {
this.producto = this.nav.get();
console.log(this.producto);
  }

  navigateTo(){
    this.navController.navigateForward('/localizacion');
  }

}
