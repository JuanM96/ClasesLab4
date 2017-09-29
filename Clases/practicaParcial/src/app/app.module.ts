import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListadoUsuariosComponent } from './componentes/listado-usuarios/listado-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoUsuariosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
