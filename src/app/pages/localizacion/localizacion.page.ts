import {AfterViewInit, Component, OnInit} from '@angular/core';
declare var mapboxgl: any;

@Component({
  selector: 'app-localizacion',
  templateUrl: './localizacion.page.html',
  styleUrls: ['./localizacion.page.scss'],
})
export class LocalizacionPage implements OnInit,AfterViewInit {

  lng: number;
  lat: number;

  constructor() { }

  ngOnInit() {
    this.lng = -60.963274;
    this.lat = -34.606924;
  }
  ngAfterViewInit(){

    mapboxgl.accessToken = 'pk.eyJ1Ijoia2FubzM3IiwiYSI6ImNrOTJybHBhODBiaW0zZm1qc2ZjYzgyamUifQ.dIQldDXjLDBBjziR04YEAA';
    const map = new mapboxgl.Map({
      container: 'map', // container id
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.lng , this.lat], // starting position
      zoom: 15 // starting zoom
    });


    map.on('load', () => {
      map.resize();
      new mapboxgl.Marker({})
          .setLngLat([this.lng, this.lat])
          .addTo(map);
    });


// Add zoom and rotation controls to the map.
    map.addControl(new mapboxgl.NavigationControl());
  }

}
