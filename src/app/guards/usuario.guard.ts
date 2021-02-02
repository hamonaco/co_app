import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanLoad, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioGuard implements CanLoad {

  constructor(private authService: AuthService) {
  }

  canLoad(): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.validaToken()
  }
  
}
