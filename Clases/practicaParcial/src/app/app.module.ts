import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListadoUsuariosComponent } from './componentes/listado-usuarios/listado-usuarios.component';
import { HttpModule } from '@angular/http';
import { MiHttpService } from './servicios/mihttp.service';



@NgModule({
  declarations: [
    AppComponent,
    ListadoUsuariosComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [MiHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
