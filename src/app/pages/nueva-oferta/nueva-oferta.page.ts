import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoadingController, ModalController, NavController} from '@ionic/angular';
import {Producto} from '../../models/producto';
import {LocalizacionPage} from '../localizacion/localizacion.page';
import {LocationService} from '../../services/location.service';


@Component({
  selector: 'app-nueva-oferta',
  templateUrl: './nueva-oferta.page.html',
  styleUrls: ['./nueva-oferta.page.scss'],
})
export class NuevaOfertaPage implements OnInit {
  customPickerOptions;
  customDate: string = new Date().toISOString();
  nuevaOferta: FormGroup;


  constructor(private formBuilder: FormBuilder, private navController: NavController, private modalController: ModalController, private locationService:LocationService, private loadingController:LoadingController) {
    this.nuevaOferta = this.formBuilder.group({
    precio: ['', Validators.required],
    categoria: ['', Validators.required],
      producto: ['', Validators.required],
      marca: ['', Validators.required],
      fechaVenc: [new Date().toISOString(), Validators.required],
      establecimiento: ['', Validators.required],
      descripcion: [''],
      localizacion: ['']
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
    this.navController.navigateBack('familia')
  }

  async openRegisterModal() {
    let loading = await this.loadingController.create({
      message: 'Cargando...',
      spinner: 'crescent'
    });
    await loading.present();
    this.locationService.getCurrentPosition().then(async res => {
      console.log(res);
      const modal = await this.modalController.create({
        component: LocalizacionPage,
        componentProps:{
          localizacion: {lat:res.coords.latitude,lng:res.coords.longitude,dragable:true}
        }
      });
      await modal.present();

      loading.dismiss();

      const data = await modal.onWillDismiss();

      this.nuevaOferta.controls['localizacion'].setValue(data.data);
    })

  }

  publicarOferta() {
    console.log(this.nuevaOferta.value.localizacion);
  }

}
