import { Injectable } from '@angular/core';
import {Plugins} from '@capacitor/core';
import {Geolocation} from '@ionic-native/geolocation/ngx';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private geolocation: Geolocation) { }

  async getCurrentPosition() {
   await this.geolocation.getCurrentPosition({timeout:10000, enableHighAccuracy: false, maximumAge: 7500}).then((resp) => {
       console.log(resp);
       return {lat: resp.coords.latitude, lng: resp.coords.longitude}
     }).catch((error) => {
       console.log('Error getting location', error);
       return error;
     });

  }
}
