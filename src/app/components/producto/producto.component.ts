import {Component, Input, OnInit} from '@angular/core';
import {Nav} from '../../services/nav.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss'],
})
export class ProductoComponent implements OnInit {

  @Input() title: string;

  constructor(private nav: Nav) { }

  ngOnInit() {}

  navigateTo() {

    this.nav.push('producto', this.title);

  }

}
