import {AfterViewInit, Component} from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
declare var mapboxgl: any;


@Component({
    selector: 'app-localizacion',
    templateUrl: './localizacion.page.html',
    styleUrls: ['./localizacion.page.scss'],
})
export class LocalizacionPage implements AfterViewInit {

    lng: number;
    lat: number;
    mapa: any;
    dragable: boolean;

    constructor(private modalController:ModalController, private navParams: NavParams) {
        const data = this.navParams.get('localizacion');
        this.lng = data.lng;
        this.lat = data.lat;
        this.dragable = data.dragable;
    }

    async ngAfterViewInit() {

        mapboxgl.accessToken = 'pk.eyJ1Ijoia2FubzM3IiwiYSI6ImNrOTJybHBhODBiaW0zZm1qc2ZjYzgyamUifQ.dIQldDXjLDBBjziR04YEAA';
        this.mapa = new mapboxgl.Map({
            container: 'map', // container id
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.lng, this.lat], // starting position
            zoom: 15 // starting zoom
        });

        this.mapa.on('load', () => {
            this.mapa.resize();
            this.crearMarcador(this.lng, this.lat, this.dragable);
        });
        // Add zoom and rotation controls to the map.
        this.mapa.addControl(new mapboxgl.NavigationControl());
    }

    crearMarcador(lng: number, lat: number, dragable: boolean) {
        const marker = new mapboxgl.Marker({
            draggable: dragable
        })
            .setLngLat([lng, lat])
            .addTo(this.mapa);

        marker.on('drag',() => {
            this.lat = marker.getLngLat().lat;
            this.lng = marker.getLngLat().lng;
        })
    }

    guardarLocalizacion() {
        this.modalController.dismiss({lat: this.lat, lng: this.lng});

    }
}
