
import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { Juego } from '../../clases/juego'

@Component({
  selector: 'app-adivina-el-numero',
  templateUrl: './adivina-el-numero.component.html',
  styleUrls: ['./adivina-el-numero.component.css']
})
export class AdivinaElNumeroComponent implements OnInit {
  
 @Output() 
  enviarJuego: EventEmitter<any>= new EventEmitter<any>();

  nuevoJuego: Juego;

 
  constructor() { 
    this.nuevoJuego = new Juego();
    console.info("numero Secreto:",this.nuevoJuego.numeroSecreto);  
  }
    
  verificar()
  {
   // if (this.nuevoJuego.verificar()){
      this.enviarJuego.emit(this.nuevoJuego);
   // }
  }  

  ngOnInit() {
  }

}
