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
  productos: Producto[];

  constructor(private nav: Nav, private dataService: DataService) { }

  ngOnInit() {
    this.cargarProductos();
    this.opcion = this.nav.get();
  }

  cargarProductos() {
    this.dataService.getProductos().subscribe(data => {
      this.productos = data;
        }
    );
  }

  nuevaOferta(){
    this.nav.push('/nueva-oferta', this.opcion);
  }

}
