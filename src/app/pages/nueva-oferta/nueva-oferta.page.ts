import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nueva-oferta',
  templateUrl: './nueva-oferta.page.html',
  styleUrls: ['./nueva-oferta.page.scss'],
})
export class NuevaOfertaPage implements OnInit {
  customPickerOptions;
  customDate: Date = new Date();

  constructor() { }

  ngOnInit() {
    this.customPickerOptions = {
      buttons: [{
        text: 'Ok',
        handler: (data) => {
          console.log('Clicked Ok');
          console.log(data);
          this.customDate = data.year.text;
          console.log(this.customDate);
        }
      }, {
        text: 'Cancelar',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
        }
      }]
    };
  }

}
