import { Injectable } from '@angular/core';
import { Juego } from '../clases/Juego'

@Injectable()
export class JuegoServiceService {

  constructor() { }

  public listar(): Array<Juego> {

    let miArray: Array<Juego> = new Array<Juego>();
    miArray.push(new Juego("Juego 1", false));
    miArray.push(new Juego("Pepe", true));
    miArray.push(new Juego("Juego 3", false));
    miArray.push(new Juego("Juego 4", false));
    miArray.push(new Juego("Juego 5", false));
    miArray.push(new Juego("Juego 6", false));
    return miArray;
  }

  public listarPromesa(): Promise<Array<Juego>> {
    let promesa: Promise<Array<Juego>> = new Promise((resolve, reject) => {
      let miArray: Array<Juego> = new Array<Juego>();
      miArray.push(new Juego("JuegoPromesa 1", false));
      miArray.push(new Juego("PepePromesa", true));
      miArray.push(new Juego("JuegoPromesa 3", false));
      miArray.push(new Juego("JuegoPromesa 4", false));
      miArray.push(new Juego("JuegoPromesa 5", false));
      miArray.push(new Juego("JuegoPromesa 6", false));
      resolve(miArray);
    });

    return promesa;
  }

}
