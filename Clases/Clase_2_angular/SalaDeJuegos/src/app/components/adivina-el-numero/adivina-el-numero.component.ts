import { Component, OnInit } from '@angular/core';
import { Juego } from '../../clases/juego';

@Component({
  selector: 'app-adivina-el-numero',
  templateUrl: './adivina-el-numero.component.html',
  styleUrls: ['./adivina-el-numero.component.css']
})
export class AdivinaElNumeroComponent implements OnInit {
  numero: number;
  public miJuego: Juego;
  constructor() {
      this.miJuego = new Juego;
   }
  ngOnInit() {
      this.miJuego.GenerarNuevo();
  }
  verificarNumero(){
      this.miJuego.verificar(this.numero);
      if (this.miJuego.gano) {
        alert("FELICITACIONES!! GANASTE! :D");
        this.miJuego.GenerarNuevo();
      }
      else{
        alert("Sigue Intentando :(")
      }
  }
  nuevo(){
      this.miJuego.GenerarNuevo();
  }
}
