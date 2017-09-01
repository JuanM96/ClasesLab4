import { Component, OnInit } from '@angular/core';
import { JuegoVA } from '../../clases/juego-va';

@Component({
  selector: 'app-velocidad-arimetica',
  templateUrl: './velocidad-arimetica.component.html',
  styleUrls: ['./velocidad-arimetica.component.css']
})
export class VelocidadArimeticaComponent implements OnInit {
  numero: number;
  public miJuego: JuegoVA;
  constructor() {
      this.miJuego = new JuegoVA;
      this.miJuego.GenerarNuevo();
  }
  ngOnInit() {
  }

}
