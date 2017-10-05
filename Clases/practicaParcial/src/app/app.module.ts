import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListadoUsuariosComponent } from './componentes/listado-usuarios/listado-usuarios.component';
import { HttpModule } from '@angular/http';
import { MiHttpService } from './servicios/mihttp.service';
import { AlertModule } from 'ngx-bootstrap';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule,MatSelectModule,MatInputModule,MatButtonModule, MatCheckboxModule} from '@angular/material';
import { MostrarUsuarioComponent } from './componentes/mostrar-usuario/mostrar-usuario.component';


@NgModule({
  declarations: [
    AppComponent,
    ListadoUsuariosComponent,
    MostrarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AlertModule.forRoot(),
    BootstrapModalModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule
  ],
  providers: [MiHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
