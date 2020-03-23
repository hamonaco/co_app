import {Component, OnInit} from '@angular/core';
import {HomeOption} from '../../models/homeOption';
import {HttpClient} from '@angular/common/http';
import {NavController} from '@ionic/angular';
import {Nav} from '../../services/nav.service';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  homeOptions: Array<HomeOption> = [
    {
      icon: '/assets/Iconos/can.svg',
      name: 'Almacen',
      redirectTo: '/familia'
    },
    {
      icon: '/assets/Iconos/bottle.svg',
      name: 'Bebidas',
      redirectTo: '/familia'
    },
    {
      icon: '/assets/Iconos/harvest.svg',
      name: 'Almacen',
      redirectTo: '/familia'
    },
    {
      icon: '/assets/Iconos/meat-fish.svg',
      name: 'Carnes y Pescados',
      redirectTo: '/familia'
    },
    {
      icon: '/assets/Iconos/quesochori.png',
      name: 'Quesos y Fiambres',
      redirectTo: '/familia'
    },
    {
      icon: '/assets/Iconos/leche1.png',
      name: 'Lacteos',
      redirectTo: '/familia'
    },
    {
      icon: '/assets/Iconos/freezer.svg',
      name: 'Congelados',
      redirectTo: '/familia'
    },
    {
      icon: '/assets/Iconos/pie.svg',
      name: 'Elaborados',
      redirectTo: '/familia'
    }
  ];


  constructor(private nav: Nav) {}

  ngOnInit() {
  }

  navigateTo(name: string) {
    return this.nav.push('familia', name);
  }

}
