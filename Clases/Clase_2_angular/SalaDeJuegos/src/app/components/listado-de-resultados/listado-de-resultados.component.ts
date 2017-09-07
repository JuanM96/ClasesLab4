import { Component, OnInit, Input } from '@angular/core';
import { Juego } from '../../clases/juego';
import { JuegoVA } from '../../clases/juego-va';


@Component({
  selector: 'app-listado-de-resultados',
  templateUrl: './listado-de-resultados.component.html',
  styleUrls: ['./listado-de-resultados.component.css']
})
export class ListadoDeResultadosComponent implements OnInit {
  @Input()
  listado : any[]; 
  constructor() 
  {
    this.listado = new Array();
    this.listado.push(new Juego("juego1","jug1",true),new Juego("juego2","jug2"),new Juego("juego3","jug3",true),new Juego("juego4","jug4"),new Juego("juego5","jug5",true),new Juego("juego6","jug6"));
  }

  ngOnInit() {
    console.info(this.listado);
  }

}
