import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import {RegisterPage} from '../register-modal/register.page';
import {RegisterPageModule} from '../register-modal/register.module';

@NgModule({
  entryComponents:[RegisterPage],
  imports: [
      RegisterPageModule,
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
