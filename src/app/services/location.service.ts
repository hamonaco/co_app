import { Injectable } from '@angular/core';
import {Plugins} from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() { }

  async getCurrentPosition() {
  // await this.geolocation.getCurrentPosition().then((resp) => {
  //     console.log(resp)
  //     return resp.coords;
  //   }).catch((error) => {
  //     console.log('Error getting location', error);
  //   });
  return {lat: -60.944199, lng:-34.590326}
  }
}
