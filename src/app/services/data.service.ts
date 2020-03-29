import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HomeOption} from '../models/homeOption';
import {Producto} from '../models/producto';

@Injectable({
    providedIn: 'root'
})

export class DataService {
    constructor(private httpClient: HttpClient) {
    }

    getHomeOptions() {
    return this.httpClient.get<HomeOption[]>('../assets/data/homeOptions.json');
    }

    getProductos() {
    return this.httpClient.get<Producto[]>('../assets/data/ofertasMock.json');
    }

}
