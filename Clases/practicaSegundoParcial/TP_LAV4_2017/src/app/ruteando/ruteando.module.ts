import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// importo del module principal
import { RouterModule, Routes } from '@angular/router';
import { AdivinaElNumeroComponent } from '../componentes/adivina-el-numero/adivina-el-numero.component';
import { ErrorComponent } from '../componentes/error/error.component';
import { PrincipalComponent } from '../componentes/principal/principal.component';
import { AgilidadAritmeticaComponent } from '../componentes/agilidad-aritmetica/agilidad-aritmetica.component';
import { MenuComponent } from '../componentes/menu/menu.component';
import { JuegosComponent } from '../componentes/juegos/juegos.component';
import { MenuCardComponent } from '../componentes/menu-card/menu-card.component';
import { CabeceraComponent } from '../componentes/cabecera/cabecera.component';
import { QuienSoyComponent } from '../componentes/quien-soy/quien-soy.component';
import { AnagramaComponent } from '../componentes/anagrama/anagrama.component';
import { HistorialDeJugadasComponent } from '../componentes/historial-de-jugadas/historial-de-jugadas.component';
import { PiedraPapelTijeraComponent } from '../componentes/piedra-papel-tijera/piedra-papel-tijera.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule,MatSelectModule,MatInputModule,MatButtonModule, MatCheckboxModule} from '@angular/material';
import { TicTacToeComponent } from '../componentes/tic-tac-toe/tic-tac-toe.component';
import { EjemploDirectivasComponent } from '../componentes/ejemplo-directivas/ejemplo-directivas.component';
import { PracticaspComponent } from './componentes/practicasp/practicasp.component';


// declaro donde quiero que se dirija
const MiRuteo = [
{path: '' , component: PrincipalComponent},
{path: 'Principal' , component: PrincipalComponent},
{path: 'EjemploDirectiva' , component: EjemploDirectivasComponent},
{path: 'PSP' , component: PracticaspComponent},
{ path: 'Juegos' ,
component: JuegosComponent ,
children:
     [{path: '' , component: MenuCardComponent},
     {path: 'Adivina' , component: AdivinaElNumeroComponent},
      {path: 'Anagrama' , component: AnagramaComponent},
      {path: 'PiedraPapelTijera' , component: PiedraPapelTijeraComponent},
      {path: 'Agilidad' , component: AgilidadAritmeticaComponent},
      {path: 'TicTacToe' , component: TicTacToeComponent},
      {path: 'Historial' , component: HistorialDeJugadasComponent},
      {path: 'QuienSoy' , component: QuienSoyComponent}]
},
{path: '**' , component: ErrorComponent},
{path: 'error' , component: ErrorComponent}];

@NgModule({
  imports: [
    RouterModule.forRoot(MiRuteo),
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule
  ],
  exports: [
    RouterModule
  ]
})
export class RuteandoModule { }
