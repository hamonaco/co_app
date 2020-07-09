import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductoPageRoutingModule } from './producto-routing.module';

import { ProductoPage } from './producto.page';
import {LocalizacionPage} from '../localizacion/localizacion.page';
import {LocalizacionPageModule} from '../localizacion/localizacion.module';

@NgModule({
  entryComponents:[LocalizacionPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductoPageRoutingModule,
      LocalizacionPageModule
  ],
  declarations: [ProductoPage]
})
export class ProductoPageModule {}
