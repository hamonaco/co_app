import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import {Plugins, StatusBarStyle} from '@capacitor/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform
  ) {
    this.initializeApp();
  }

  async initializeApp() {
    const {SplashScreen , StatusBar} = Plugins;
    try {
      await SplashScreen.hide();
      await StatusBar.setStyle({style: StatusBarStyle.Light})
      if (this.platform.is('ios')){
        StatusBar.setBackgroundColor({color: '#CDCDCD'})
      }
    }catch (e) {
      console.log('This is normal in a browser', e);
    }
  }
}
