import { Component, OnInit } from '@angular/core';
import { Juego } from '../../clases/juego';
import { JuegoVA } from '../../clases/juego-va';
import { JuegosService } from '../../servicios/juegos.service';

@Component({
  selector: 'app-menu-del-listado',
  templateUrl: './menu-del-listado.component.html',
  styleUrls: ['./menu-del-listado.component.css']
})
export class MenuDelListadoComponent implements OnInit {
  listadoParaCompartir :any[];
  miServicioJuego:JuegosService;
  constructor(servicioJuego:JuegosService) 
  {
    //this.listadoParaCompartir = new Array();
    //this.listadoParaCompartir.push(new Juego("juego1","jug1",true),new Juego("juego2","jug2"),new Juego("juego3","jug3",true),new Juego("juego4","jug4"),new Juego("juego5","jug5",true),new Juego("juego6","jug6"));
    this.miServicioJuego = servicioJuego;
  }

  ngOnInit() {
    console.log(this.listadoParaCompartir);
  }
  llamaService(){
    this.listadoParaCompartir = this.miServicioJuego.listar();
  }

}
