import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Nav} from '../../services/nav.service';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-nueva-oferta',
  templateUrl: './nueva-oferta.page.html',
  styleUrls: ['./nueva-oferta.page.scss'],
})
export class NuevaOfertaPage implements OnInit {
  customPickerOptions;
  customDate: string = new Date().toISOString();
  nuevaOferta: FormGroup;

  constructor(private formBuilder: FormBuilder, private navController: NavController) {
    this.nuevaOferta = this.formBuilder.group({
    precio: ['', Validators.required],
    categoria: ['', Validators.required],
      producto: ['', Validators.required],
      marca: ['', Validators.required],
      fechaVenc: [new Date().toISOString(), Validators.required],
      establecimiento: ['', Validators.required],
      descripcion: ['']
    })
  }

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

  goBack(){
    this.navController.back();
  }

  redirectTo(){
    this.navController.navigateForward('localizacion');
  }

  publicarOferta() {
    console.log(this.nuevaOferta);
  }

}
