import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoadingController, ModalController, NavController} from '@ionic/angular';
import {Producto} from '../../models/producto';
import {LocalizacionPage} from '../localizacion/localizacion.page';
import {LocationService} from '../../services/location.service';
import {Nav} from '../../services/nav.service';
import {HomeOption} from '../../models/homeOption';
import {DataService} from '../../services/data.service';
import {CameraResultType, CameraSource, Plugins} from '@capacitor/core';
import {SafeResourceUrl, DomSanitizer} from '@angular/platform-browser';

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


  constructor(private domSanitazer: DomSanitizer, private nav: Nav, private formBuilder: FormBuilder, private navController: NavController, private modalController: ModalController, private locationService:LocationService, private loadingController:LoadingController, private dataService: DataService) {
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

  // async takePicture() {
  //   const image = await Camera.getPhoto({
  //     quality: 90,
  //     allowEditing: true,
  //     resultType: CameraResultType.Uri
  //   });
  //   // image.webPath will contain a path that can be set as an image src.
  //   // You can access the original file using image.path, which can be
  //   // passed to the Filesystem API to read the raw data of the image,
  //   // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
  //   var imageUrl = image.webPath;
  //   var imagePath = image.path;
  //   console.log(imagePath);
  //   // Can be set to the src of an image now
  //  // imageElement.src = imageUrl;
  // }

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

    const coords = await this.locationService.getCurrentPosition();
      const modal = await this.modalController.create({
        component: LocalizacionPage,
        componentProps:{
          localizacion: {coords, dragable:true}
        }
      });
      await modal.present();

      loading.dismiss();

      const data = await modal.onWillDismiss();

      this.nuevaOferta.controls['localizacion'].setValue(data.data);

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
      ubicacion: {lat: -34.589916356521165, long: -60.94817060369721}
    };
    this.dataService.postOferta(this.oferta).then(res => {
      console.log(res);
      this.navController.navigateBack('/home')
    });
    loading.dismiss();
  }

}
