import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'servicio',
    loadChildren: () => import('./page/servicio/servicio.module').then( m => m.ServicioPageModule)
  },
  {
    path: 'trabajo',
    loadChildren: () => import('./page/trabajo/trabajo.module').then( m => m.TrabajoPageModule)
  },
  {
    path: 'reservar-hora',
    loadChildren: () => import('./page/reservar-hora/reservar-hora.module').then( m => m.ReservarHoraPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./page/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./page/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./page/home/home.module').then( m => m.HomePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
