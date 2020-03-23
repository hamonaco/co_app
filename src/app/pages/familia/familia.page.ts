import { Component, OnInit } from '@angular/core';
import {Nav} from '../../services/nav.service';

@Component({
  selector: 'app-familia',
  templateUrl: './familia.page.html',
  styleUrls: ['./familia.page.scss'],
})
export class FamiliaPage implements OnInit {
  title: string;

  constructor(private nav: Nav) { }

  ngOnInit() {
    this.title = this.nav.get();
    console.log(this.title);
  }


}
