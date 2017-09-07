import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';
import { AdivinaElNumeroComponent } from './components/adivina-el-numero/adivina-el-numero.component';
import { AppComponent } from './app.component';
import { VelocidadArimeticaComponent } from './components/velocidad-arimetica/velocidad-arimetica.component';
import { LoginComponent } from './components/login/login.component';
import { ListadoDeResultadosComponent } from './components/listado-de-resultados/listado-de-resultados.component';
import { MenuDelListadoComponent } from './components/menu-del-listado/menu-del-listado.component';

let miRuteo = [
  {path: 'adivina', component: AdivinaElNumeroComponent},
  {path: 'velocidad',component: VelocidadArimeticaComponent},
  {path: '',component: LoginComponent},
  {path: 'listado',component: ListadoDeResultadosComponent},
  {path: 'menuList',component: MenuDelListadoComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    AdivinaElNumeroComponent,
    VelocidadArimeticaComponent,
    LoginComponent,
    ListadoDeResultadosComponent,
    MenuDelListadoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(miRuteo)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
