import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';
import { AdivinaElNumeroComponent } from './components/adivina-el-numero/adivina-el-numero.component';
import { AppComponent } from './app.component';
import { VelocidadArimeticaComponent } from './components/velocidad-arimetica/velocidad-arimetica.component';

let miRuteo = [
  {path: 'adivina', component: AdivinaElNumeroComponent},
  {path: 'adivina',component: AdivinaElNumeroComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    AdivinaElNumeroComponent,
    VelocidadArimeticaComponent,
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
