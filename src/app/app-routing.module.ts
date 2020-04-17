import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)},
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'familia',
    loadChildren: () => import('./pages/familia/familia.module').then( m => m.FamiliaPageModule)
  },
  {
    path: 'producto',
    loadChildren: () => import('./pages/producto/producto.module').then( m => m.ProductoPageModule)
  },
  {
    path: 'nueva-oferta',
    loadChildren: () => import('./pages/nueva-oferta/nueva-oferta.module').then( m => m.NuevaOfertaPageModule)
  },
  {
    path: 'localizacion',
    loadChildren: () => import('./pages/localizacion/localizacion.module').then( m => m.LocalizacionPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
