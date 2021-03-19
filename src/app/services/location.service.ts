import { Injectable } from '@angular/core';
import {Plugins} from '@capacitor/core';
import {Geolocation} from '@ionic-native/geolocation/ngx';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private geolocation: Geolocation) { }

  async getCurrentPosition() {
   await this.geolocation.getCurrentPosition({timeout:10000, enableHighAccuracy: true, maximumAge: 7500}).then((resp) => {
       return resp.coords;
     }).catch((error) => {
       console.log('Error getting location', error);
       return error;
     });

  }
}
