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
  customDate: Date = new Date();
  nuevaOferta: FormGroup;
  today: Date = new Date();


  constructor(private nav: Nav, private formBuilder: FormBuilder, private navController: NavController, private modalController: ModalController, private locationService:LocationService, private loadingController:LoadingController, private dataService: DataService) {
    this.nuevaOferta = this.formBuilder.group({
      precio: ['', Validators.required],
      categoria: [this.nav.get().nombre, Validators.required],
      producto: ['', Validators.required],
      marca: ['', Validators.required],
      fechaVenc: ['',Validators.required],
      establecimiento: ['', Validators.required],
      descripcion: [''],
      localizacion: ['',Validators.required]
    });

   /* this.customPickerOptions = {
      buttons: [{
        text: 'Ok',
        handler: (data) => {
          console.log(data);
          this.customDate = data.toISOString();
        }
      }, {
        text: 'Cancelar',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
        }
      }]
    };*/
  }

  ngOnInit() {
    this.categoria = this.nav.get();

  }

  goBack(){
    this.navController.navigateBack('familia')
  }

  cambioFecha(event){
    this.nuevaOferta.controls['fechaVenc'].setValue(event.detail.value)
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
      this.navController.navigateBack('/home')
    });
    loading.dismiss();
  }

}
