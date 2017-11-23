import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// importo del module principal
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from '../componentes/error/error.component';
import { PrincipalComponent } from '../componentes/principal/principal.component';
import { MapaComponent } from '../componentes/mapa/mapa.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule,MatSelectModule,MatInputModule,MatButtonModule, MatCheckboxModule} from '@angular/material';
import { EjemploDirectivasComponent } from '../componentes/ejemplo-directivas/ejemplo-directivas.component';
import { PracticaspComponent } from '../componentes/practicasp/practicasp.component';
import { WsService }  from '../servicios/ws/ws.service';
import { AuthService } from '../servicios/auth/auth.service';
import { VerificarJwtService } from '../servicios/verificar-jwt/verificar-jwt.service';
import { JwtModule } from '../jwt/jwt.module';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { DirectionsMapDirective } from '../servicios/googlr-map.directive';
// declaro donde quiero que se dirija
const MiRuteo = [
{path: '' , component: PrincipalComponent},
{path: 'Login' , component: PrincipalComponent},
{path: 'EjemploDirectiva' , component: EjemploDirectivasComponent},
{path: 'PSP' ,canActivate: [VerificarJwtService], component: PracticaspComponent},
//{path: '**' , component: ErrorComponent},
{path: 'error' , component: ErrorComponent},
{path: 'mapa' , component: MapaComponent}];

@NgModule({
  imports: [
    RouterModule.forRoot(MiRuteo),
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    AgmCoreModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDQeKmiSQJmZqY7nNtuqf4gTRyIE4Qws20',
      libraries: ["places"]
    }),
  ],
  exports: [
    RouterModule
  ]
})
export class RuteandoModule { }
