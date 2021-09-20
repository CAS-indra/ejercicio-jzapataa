import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransaccionRoutingModule } from './transaccion-routing.module';
import { TransaccionComponent } from './transaccion.component';


@NgModule({
  declarations: [
    TransaccionComponent
  ],
  imports: [
    CommonModule,
    TransaccionRoutingModule
  ]
})
export class TransaccionModule { }
