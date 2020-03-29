import {Component, Input, OnInit} from '@angular/core';
import {Nav} from '../../services/nav.service';
import {Producto} from '../../models/producto';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent implements OnInit {
  @Input() productos: Producto[];

  constructor(private nav: Nav) { }

  ngOnInit() {}

}
