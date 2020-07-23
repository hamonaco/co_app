import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoadingController, ModalController, NavController} from '@ionic/angular';
import {Producto} from '../../models/producto';
import {LocalizacionPage} from '../localizacion/localizacion.page';
import {LocationService} from '../../services/location.service';
import {Nav} from '../../services/nav.service';
import {HomeOption} from '../../models/homeOption';
import {DataService} from '../../services/data.service';


@Component({
  selector: 'app-nueva-oferta',
  templateUrl: './nueva-oferta.page.html',
  styleUrls: ['./nueva-oferta.page.scss'],
})
export class NuevaOfertaPage implements OnInit {
  customPickerOptions;
  oferta: Producto;
  categoria : HomeOption;
  customDate: string = new Date().toISOString();
  nuevaOferta: FormGroup;


  constructor(private nav: Nav, private formBuilder: FormBuilder, private navController: NavController, private modalController: ModalController, private locationService:LocationService, private loadingController:LoadingController, private dataService: DataService) {
    this.nuevaOferta = this.formBuilder.group({
      precio: ['', Validators.required],
      categoria: [this.nav.get().nombre, Validators.required],
      producto: ['', Validators.required],
      marca: ['', Validators.required],
      fechaVenc: [new Date().toISOString(), Validators.required],
      establecimiento: ['', Validators.required],
      descripcion: [''],
      localizacion: ['',Validators.required]
    })
  }

  ngOnInit() {
    this.categoria = this.nav.get();
    this.customPickerOptions = {
      buttons: [{
        text: 'Ok',
        handler: (data) => {
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

  async publicarOferta() {
    let loading = await this.loadingController.create({
      message: 'Publicando oferta',
      spinner: 'crescent'
    });
    await loading.present();
    this.oferta = {
      foto: null,
      categoria: this.categoria.id,
      marca: this.nuevaOferta.value.marca,
      establecimiento: this.nuevaOferta.value.establecimiento,
      validez: this.nuevaOferta.value.fechaVenc,
      fecha_pub: new Date().toISOString(),
      estado: null,
      precio: this.nuevaOferta.value.precio,
      producto: this.nuevaOferta.value.producto,
      descripcion: this.nuevaOferta.value.descripcion,
      lat: this.nuevaOferta.value.localizacion.lat,
      long: this.nuevaOferta.value.localizacion.lng
    };
    this.dataService.postOferta(this.oferta).then(res => {
      console.log(res);
      this.goBack();
    });
    loading.dismiss();
  }

}
