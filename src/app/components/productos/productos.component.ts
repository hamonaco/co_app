import {Component, Input, OnInit} from '@angular/core';
import {Nav} from '../../services/nav.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent implements OnInit {
  @Input() title: string;

  constructor(private nav: Nav) { }

  ngOnInit() {}

}
