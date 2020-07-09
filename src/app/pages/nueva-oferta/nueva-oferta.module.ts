import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevaOfertaPageRoutingModule } from './nueva-oferta-routing.module';

import { NuevaOfertaPage } from './nueva-oferta.page';
import {LocalizacionPage} from '../localizacion/localizacion.page';
import {LocalizacionPageModule} from '../localizacion/localizacion.module';

@NgModule({
  entryComponents:[LocalizacionPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevaOfertaPageRoutingModule,
    ReactiveFormsModule,
    LocalizacionPageModule
  ],
  declarations: [NuevaOfertaPage]
})
export class NuevaOfertaPageModule {}
