import { Component, OnInit } from '@angular/core';
import { JuegoServiceService } from '../../servicios/juego-service.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  public listadoParaCompartir: Array<any>;
   miServicioJuego:JuegoServiceService
  constructor(servicioJuego:JuegoServiceService) { 
    this.miServicioJuego = servicioJuego;}
  
  ngOnInit() {
    
  }

  llamaService(){
    this.listadoParaCompartir= this.miServicioJuego.listar();
  }

  llamaServicePromesa(){
    this.miServicioJuego.listarPromesa().then((listado) => {
        this.listadoParaCompartir = listado;
    });
  }
}
