import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {UsuarioGuard} from './guards/usuario.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule),
    canLoad: [UsuarioGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'familia',
    loadChildren: () => import('./pages/familia/familia.module').then( m => m.FamiliaPageModule),
    canLoad: [UsuarioGuard]
  },
  {
    path: 'producto',
    loadChildren: () => import('./pages/producto/producto.module').then( m => m.ProductoPageModule),
    canLoad: [UsuarioGuard]
  },
  {
    path: 'nueva-oferta',
    loadChildren: () => import('./pages/nueva-oferta/nueva-oferta.module').then( m => m.NuevaOfertaPageModule),
    canLoad: [UsuarioGuard]
  },
  {
    path: 'localizacion',
    loadChildren: () => import('./pages/localizacion/localizacion.module').then( m => m.LocalizacionPageModule),
    canLoad: [UsuarioGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
