import { Component, OnInit } from '@angular/core';
import {Nav} from '../../services/nav.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {
  title: string;

  constructor(private nav: Nav) { }

  ngOnInit() {
this.title = this.nav.get();
console.log(this.title);
  }

}
