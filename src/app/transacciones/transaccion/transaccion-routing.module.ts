import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransaccionComponent } from './transaccion.component';

const routes: Routes = [{ path: ':id', component: TransaccionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransaccionRoutingModule {}
