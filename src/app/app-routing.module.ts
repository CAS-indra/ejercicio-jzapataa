import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
  },
  { path: 'about', loadChildren: () => import('./acerca-de/acerca-de.module').then(m => m.AcercaDeModule) },
  { path: 'contact', loadChildren: () => import('./contacto/contacto.module').then(m => m.ContactoModule) },
  { path: 'transaction', loadChildren: () => import('./transacciones/transacciones.module').then(m => m.TransaccionesModule) },
  { path: 'transaction/new', loadChildren: () => import('./transacciones/new/new.module').then(m => m.NewModule) },
  { path: 'auth/login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
