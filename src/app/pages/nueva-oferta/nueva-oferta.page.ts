import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoadingController, ModalController, NavController, ToastController} from '@ionic/angular';
import {Producto} from '../../models/producto';
import {LocalizacionPage} from '../localizacion/localizacion.page';
import {Nav} from '../../services/nav.service';
import {HomeOption} from '../../models/homeOption';
import {DataService} from '../../services/data.service';
import {CameraResultType,Plugins} from '@capacitor/core';
import {DomSanitizer} from '@angular/platform-browser';
import {Geolocation} from '@ionic-native/geolocation/ngx';

const { Camera } = Plugins;


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
  foto: any;
  today: Date = new Date();
  coords: any;


  constructor(private domSanitazer: DomSanitizer, private toastController: ToastController ,private geolocation: Geolocation, private nav: Nav, private formBuilder: FormBuilder, private navController: NavController, private modalController: ModalController, private loadingController:LoadingController, private dataService: DataService) {
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
  }

  ngOnInit() {
    this.categoria = this.nav.get();

  }

  async takePicture() {
    try {
      const result = await Camera.getPhoto({
        quality: 75,
        allowEditing: false,
        resultType: CameraResultType.Uri
      });
      this.foto = result.webPath;
      console.log(this.foto);
    } catch (error) {
      console.error(error);
    }
  }

  goBack(){
    this.navController.navigateBack('familia')
  }

  cambioFecha(event){
    this.nuevaOferta.controls['fechaVenc'].setValue(event.detail.value)
  }

  async openRegisterModal() {
    let loading = await this.loadingController.create({
      message: 'Obteniendo la ubicacion...',
      spinner: 'crescent'
    });
    await loading.present();

    await this.geolocation.getCurrentPosition().then((resp)=>{
      const coords = {lat:`${resp.coords.latitude}`,lng:`${resp.coords.longitude}`};
      this.coords = coords;
    });

    const modal = await this.modalController.create({
        component: LocalizacionPage,
        componentProps:{
          localizacion: {lat: this.coords.lat,lng: this.coords.lng, dragable:true}
        }
      });
      await modal.present();

      loading.dismiss();

      const data = await modal.onWillDismiss();
      console.log(data);

      this.nuevaOferta.controls['localizacion'].setValue(data.data);

  }

  async publicarOferta() {
    let loading = await this.loadingController.create({
      message: 'Publicando oferta',
      spinner: 'crescent'
    });
    await loading.present();
    this.oferta = {
      foto: '/Users/kano/CazandoOfertas/co_app/src/assets/cazando-logo.png',
      categoria: this.categoria.id,
      marca: this.nuevaOferta.value.marca,
      establecimiento: this.nuevaOferta.value.establecimiento,
      validez: this.nuevaOferta.value.fechaVenc,
      fecha_pub: new Date().toISOString(),
      estado: null,
      precio: this.nuevaOferta.value.precio,
      producto: this.nuevaOferta.value.producto,
      descripcion: this.nuevaOferta.value.descripcion,
      //ubicaciones: {lat: this.nuevaOferta.value.localizacion.lat, long: this.nuevaOferta.value.localizacion.lng}
      lat: this.nuevaOferta.value.localizacion.lat,
      long: this.nuevaOferta.value.localizacion.lng

    };
    this.dataService.postOferta(this.oferta).then(async res => {
      if (res) {
        const toast = await this.toastController.create({
          message: 'Gracias por compartir tu oferta',
          duration: 2000
        });
        toast.present();
        this.navController.navigateBack('/home');
      }else {
        const toast = await this.toastController.create({
          message: 'Tu oferta no pudo ser publicada',
          duration: 2000
        });
        toast.present();
      }
    });
    loading.dismiss();
  }

}
