import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { TitleComponent } from './title/title.component';
import { TransaccionComponent } from './transaccion/transaccion.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    TransaccionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
