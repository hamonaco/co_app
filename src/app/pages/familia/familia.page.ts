import { Component, OnInit } from '@angular/core';
import {Nav} from '../../services/nav.service';
import {Producto} from '../../models/producto';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-familia',
  templateUrl: './familia.page.html',
  styleUrls: ['./familia.page.scss'],
})
export class FamiliaPage implements OnInit {
  title: string;
  productos: Producto[];

  constructor(private nav: Nav, private dataService: DataService) { }

  ngOnInit() {
    this.cargarProductos();
    this.title = this.nav.get();
  }

  cargarProductos() {
    this.dataService.getProductos().subscribe(data => {
      console.log(data);
      this.productos = data;
        }
    );
  }

}
