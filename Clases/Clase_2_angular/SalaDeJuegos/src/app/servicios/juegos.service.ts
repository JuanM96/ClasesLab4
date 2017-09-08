import { Injectable } from '@angular/core';
import { Juego } from '../clases/juego';

@Injectable()
export class JuegosService {

  constructor() { }
  public listar(){
    let miArray: Juego[] = new Array();
    miArray.push(new Juego("juego1","jug1",true),new Juego("juego2","jug2"),new Juego("juego3","jug3",true),new Juego("juego4","jug4"),new Juego("juego5","jug5",true),new Juego("juego6","jug6"));
    return miArray;
  }
}
