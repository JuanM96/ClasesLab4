import { Component, OnInit } from '@angular/core';
import { JugadoresService } from '../../servicios/jugadores.service';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
@Component({
  selector: 'app-jugadores-listado',
  templateUrl: './jugadores-listado.component.html',
  styleUrls: ['./jugadores-listado.component.css']
})
export class JugadoresListadoComponent implements OnInit {

  listado:any
  miJugadoresServicio:JugadoresService
  
    constructor(serviceJugadores:JugadoresService) {
      this.miJugadoresServicio = serviceJugadores;
      
    }
    settings = {
      mode:'in-line',
      columns: {
        usuario: {
          title: 'Usuario'
        },
        cuit: {
          title: 'Cuit'
        },
        sexo: {
          title: 'Sexo'
        },
        fecha: {
          title: 'Fecha'
        },
        gano: {
          title: 'Gano'
        }
      },
      add:{
        confirmCreate: true
      },
      edit:{
        editConfirm: true
      },
      delete:{
        deleteConfirm: true
      },
      actions:{
        edit:true,
        add:true,
        delete:true
      }
    };
    


  ngOnInit() {
    this.TraerTodos();
  }


  TraerTodos(){
    //alert("totos");
    this.miJugadoresServicio.traertodos('jugadores/','todos').then(data=>{
      //console.info("jugadores listado",(data));
      this.listado= data;

    })
  }
  TraerGanadores(){
    this.miJugadoresServicio.traertodos('jugadores/','ganadores').then(data=>{
      //console.info("jugadores listado",(data));
      this.listado= data;
    })
  }
  TraerPerdedores(){
    this.miJugadoresServicio.traertodos('jugadores/','perdedores').then(data=>{
      //console.info("jugadores listado",(data));
      this.listado= data;
  })}
  Creando(data){
    console.info(data);
    data.confirm.resolve();
  }
  Editando(data){
    console.info(data);
    data.confirm.resolve();
  }
  Borrando(data){
    console.info(data);
    data.confirm.resolve();
  }
}
