import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Storage} from '@ionic/storage';
import {environment} from '../../environments/environment';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: string = null;

  constructor(private httpClient: HttpClient, private storage: Storage) { }

  login(email: string, password: string) {
    const data = {email, password};

    return new Promise(resolve => {
      this.httpClient.post(`${URL}/login`, data).subscribe(res => {
        this.guardarToken(res['token']);
        resolve(true);
        }, error => {
        resolve(error);
      });})

  }

  async guardarToken(token: string) {
    this.token = token;
    await this.storage.set('token', token);
  }

  registroUsuario(email: string, password: string, username: string){

    const data = {email, password, username};

    return  this.httpClient.post(`${URL}/user/crear`, data);
  }

}
