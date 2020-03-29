import { Component, OnInit } from '@angular/core';
import {Nav} from '../../services/nav.service';
import {Producto} from '../../models/producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {

  producto: Producto;

  constructor(private nav: Nav) { }

  ngOnInit() {
this.producto = this.nav.get();
console.log(this.producto);
  }

}
