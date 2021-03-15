import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Producto, Respuesta} from '../models/producto';
import {environment} from '../../environments/environment';
import {Storage} from '@ionic/storage';
import {HomeOption} from '../models/homeOption';

const URL = environment.url;
@Injectable({
    providedIn: 'root'
})

export class DataService {

    paginaOferta = -1;
    token: string = null;
    constructor(private httpClient: HttpClient, private storage: Storage) {
    }

    async getToken(){
        return await this.storage.get('token').then(res => {
            this.token = res
        });

    }

    async getOfertas(categoria: number, pull: boolean){
        if (pull){
            this.paginaOferta = -1;
        }
        this.paginaOferta ++;
        await this.getToken();

        return new Promise<Respuesta>(resolve => {
            this.httpClient.get<Respuesta>(`${URL}/ofertas?categoria=${categoria}&pagina=${this.paginaOferta}`,{
                headers: {
                    "Authorization": this.token
                }}).subscribe(res => {
                    console.log(res.ofertas);
                    this.storage.set('ofertas',res.ofertas);
                resolve(res);
            }, error => {
                resolve(error);
            });
        });

    }

    async getHomeOptions() {
        await this.getToken();
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
        await this.getToken()
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


}
