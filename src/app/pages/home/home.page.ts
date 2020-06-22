import {Component, OnInit} from '@angular/core';
import {HomeOption} from '../../models/homeOption';
import {Nav} from '../../services/nav.service';
import {DataService} from '../../services/data.service';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  opciones : Array<HomeOption> = [];


  constructor(private nav: Nav, private dataService: DataService) {}

  async ngOnInit() {
    await this.dataService.getHomeOptions().then(res => {
      this.opciones = res;
    })
  }

  navigateTo(nombre: string) {
    return this.nav.push('familia', nombre);
  }

}
