import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PieComponent } from './pie/pie.component';



@NgModule({
  declarations: [
    HeaderComponent,
    PieComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
