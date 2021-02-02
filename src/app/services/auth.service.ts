import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Storage} from '@ionic/storage';
import {environment} from '../../environments/environment';
import {Usuario} from '../models/usuario';
import {NavController} from '@ionic/angular';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: string = null;
  private usuario: Usuario = {};

  constructor(private httpClient: HttpClient, private storage: Storage, private navCtrl: NavController) { }

  login(email: string, password: string) {
    const data = {email, password};

    return new Promise(resolve => {
      this.httpClient.post(`${URL}/login`, data).subscribe(res => {
        this.guardarToken(res['token']);
        this.usuario.email = data.email;
        resolve(true);
        }, error => {
        this.token = null
        this.usuario = {};
        this.storage.clear();
        resolve(error);
      });})

  }

  logout(){
    this.token = null;
    this.usuario = {};
    this.storage.clear();
    this.navCtrl.navigateRoot('/login',{animated: true});
  }

  async guardarToken(token: string) {
    this.token = token;
    await this.storage.set('token', token);
  }

  async cargarToken(){
    this.token = await this.storage.get('token') || null
  }

  registroUsuario(email: string, password: string, username: string){

    const data = {email, password, username};

    return  this.httpClient.post(`${URL}/user/crear`, data);
  }



  async validaToken(): Promise<boolean>{

    await this.cargarToken();
    console.log(this.token);

    if (!this.token){
      this.navCtrl.navigateRoot('/login');
      return Promise.resolve(false);
    }

    return new Promise<boolean>(resolve => {



      this.httpClient.get(`${URL}/user/verificar?email=${this.usuario.email}&token=${this.token}`).subscribe( (res:any) => {

        console.log(res)
        resolve(true);
      },err => {
          this.navCtrl.navigateRoot('/login');
          console.log(err);
          resolve(false);
      })
    })
  }

}
