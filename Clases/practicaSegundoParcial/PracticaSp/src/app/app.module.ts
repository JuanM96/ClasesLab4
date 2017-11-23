import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
//  import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// import { AccordionModule } from 'ngx-bootstrap';
// agrego las clases para utilizar ruteo
import { RouterModule, Routes } from '@angular/router';

import { ErrorComponent } from './componentes/error/error.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { RuteandoModule } from './ruteando/ruteando.module';
// declaro donde quiero que se dirija
/*
const MiRuteo = [{path: 'error' , component: ErrorComponent},
{path: 'Login' , component: LoginComponent},
{path: 'Principal' , component: PrincipalComponent , pathMatch: 'full'},
{path: 'Adivina' , component: AdivinaElNumeroComponent},
{path: 'AdivinaMasListado' , component: AdivinaMasListadoComponent},
{path: 'AgilidadaMasListado' , component: AgilidadMasListadoComponent},
{path: 'Agilidad' , component: AgilidadAritmeticaComponent},
{path: '' , component: LoginComponent , pathMatch: 'full'},

{path: '**' , component: ErrorComponent} ];
*/

import { JuegoServiceService } from './servicios/juego-service.service';
import { MiHttpService } from './servicios/mi-http.service';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule,MatSelectModule,MatInputModule,MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDialogModule} from '@angular/material/dialog';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { EjemploDirectivasComponent } from './componentes/ejemplo-directivas/ejemplo-directivas.component';
import { DirectivaDirective } from './directivas/directiva.directive';
import { Directiva2Directive } from './directivas/directiva2.directive';
import { Directiva3Directive } from './directivas/directiva3.directive';
import { Directiva4Directive } from './directivas/directiva4.directive';
import { Directiva5Directive } from './directivas/directiva5.directive';
import { PracticaspComponent } from './componentes/practicasp/practicasp.component';
import { PracticaspBotonComponent } from './componentes/practicasp-boton/practicasp-boton.component';
import { DialogOverviewExampleDialog } from './componentes/dialog-overview-example-dialog/dialog-overview-example-dialog.component';
import { WsService }  from './servicios/ws/ws.service';
import { AuthService } from './servicios/auth/auth.service';
import { VerificarJwtService } from './servicios/verificar-jwt/verificar-jwt.service';
import { JwtModule } from './jwt/jwt.module';
@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    PrincipalComponent,
    EjemploDirectivasComponent,
    DirectivaDirective,
    Directiva2Directive,
    Directiva3Directive,
    Directiva4Directive,
    Directiva5Directive,
    PracticaspComponent,
    PracticaspBotonComponent,
    DialogOverviewExampleDialog
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RuteandoModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    HttpModule,
    MatSidenavModule,
    Ng2SmartTableModule,
    MatDialogModule,
    JwtModule
    // NgbModule.forRoot(MiRuteo),
    // importo el ruteo
    // RouterModule.forRoot(MiRuteo)
  ],
  providers: [JuegoServiceService,MiHttpService,WsService,AuthService,VerificarJwtService],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogOverviewExampleDialog
  ],
})
export class AppModule { }
