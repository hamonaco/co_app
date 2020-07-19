import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Producto} from '../models/producto';
import {environment} from '../../environments/environment';
import {Storage} from '@ionic/storage';
import {HomeOption} from '../models/homeOption';

const URL = environment.url;
@Injectable({
    providedIn: 'root'
})

export class DataService {

    token: string = null;
    constructor(private httpClient: HttpClient, private storage: Storage) {
    }

    async getHomeOptions() {
        await this.storage.get('token').then(res => {
            this.token = res
        });
        return new Promise<HomeOption[]>(resolve => {
            this.httpClient.get<HomeOption[]>(`${URL}/categorias`,{
                headers: {
                    "Authorization": this.token
                }}).subscribe(res => {
                resolve(res);
            }, error => {
                resolve(error);
            });
        });
    }

    async postOferta(oferta: Producto) {
        await this.storage.get('token').then(res => {
            this.token = res
        });
        return new Promise(resolve => {
            this.httpClient.post(`${URL}/ofertas`,oferta,{
                headers: {
                    "Authorization": this.token
                }}).subscribe(res => {
                resolve(res);
            }, error => {
                resolve(error);
            });
        });
    }

    getProductos() {
    return this.httpClient.get<Producto[]>('../assets/data/ofertasMock.json');
    }

}
