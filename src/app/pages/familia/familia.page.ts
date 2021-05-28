import { Component, OnInit } from '@angular/core';
import {Nav} from '../../services/nav.service';
import {Producto} from '../../models/producto';
import {DataService} from '../../services/data.service';
import {HomeOption} from '../../models/homeOption';

@Component({
  selector: 'app-familia',
  templateUrl: './familia.page.html',
  styleUrls: ['./familia.page.scss'],
})
export class FamiliaPage implements OnInit {
  opcion: HomeOption;
  productos: Producto[] = [];
  deshabilitado: boolean = false;

  constructor(private nav: Nav, private dataService: DataService) { }

  async ngOnInit() {
    this.opcion = this.nav.get();
    await this.cargarProductos();
  }

  async doRefresh(event){
    this.productos = [];
  await this.cargarProductos(event,true);
  this.deshabilitado = false;

  }

  async cargarProductos(event? ,pull: boolean = false) {
    await this.dataService.getOfertas(this.opcion.id,pull).then(res => {
      console.log(res);
      this.productos.push(...res.ofertas);

      if (event){
        event.target.complete();
        if(res.ofertas.length === 0){
          this.deshabilitado = true;
        }};
    });

  }

  nuevaOferta(){
    this.nav.push('/nueva-oferta', this.opcion);
  }

}
