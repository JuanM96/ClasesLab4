import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { Juego } from '../../clases/juego'

@Component({
  selector: 'app-agilidad-aritmetica',
  templateUrl: './agilidad-aritmetica.component.html',
  styleUrls: ['./agilidad-aritmetica.component.css']
})
export class AgilidadAritmeticaComponent implements OnInit {
   @Output() 
  enviarJuego :EventEmitter<any>= new EventEmitter<any>();
  nuevoJuego : Juego;

  ngOnInit() {
  }
   constructor() { 
    this.nuevoJuego = new Juego();
    console.info("numero Secreto:",this.nuevoJuego.numeroSecreto);  
  }
    
  verificar()
  {
    if (this.nuevoJuego.verificar()){
      this.enviarJuego.emit(this.nuevoJuego);
    }
  }  

}
