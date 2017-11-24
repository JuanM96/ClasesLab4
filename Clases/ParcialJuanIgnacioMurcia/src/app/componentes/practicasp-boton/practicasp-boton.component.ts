import { Component, OnInit,Input,Inject,Output,EventEmitter } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { EmpleadoService } from '../../servicios/empleado.service';
import {DialogOverviewExampleDialog} from '../dialog-overview-example-dialog/dialog-overview-example-dialog.component';
@Component({
  selector: 'app-practicasp-boton',
  templateUrl: './practicasp-boton.component.html',
  styleUrls: ['./practicasp-boton.component.css']
})
export class PracticaspBotonComponent implements OnInit {
  @Input()
  accion:any;
  @Input()
  id:any;
  @Output() mensajeEvent = new EventEmitter<any>();
  nuevaData:any = {
    nombre:"",
    apellido:"",
    sexo:"",
    direccion:"",
    latitud:"",
    longitud:"",
    nombreBuscado:""
  }
  //ocultarMapa:boolean;
  //ocultarMostrar:boolean;
  constructor(/*public dialog: MatDialog*/public miAccesoEmpleado:EmpleadoService) {}
  
  /*openDialog(): void {
    console.log(this.nombre);
    let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: { nombre: this.nombre, apellido: this.apellido, sexo: this.sexo, direccion: this.direccion, latitud: this.latitud, longitud: this.longitud }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      this.nuevaData.nombre = result.nombre;
      this.nuevaData.apellido = result.apellido;
      this.nuevaData.sexo = result.sexo;
      this.nuevaData.direccion = result.direccion;
      this.nuevaData.latitud = result.latitud;
      this.nuevaData.longitud = result.longitud;
      this.nuevaData.nombreBuscado = this.nombre;
      
    });
  }*/

  ngOnInit() {
    /*this.ocultarMapa = false;
    this.ocultarMostrar = false;*/
  }
  BorrarEmpleado(){
    console.log(this.id);
    let data:any = {
      id:this.id
    };
    this.miAccesoEmpleado.BorrameUnEmpleado(data).then(datos => {console.log(datos); this.mensajeEvent.emit("go!");}).catch(error => {console.log(error)});
  }
  /*sendMessage() {
    //this.mensajeEvent.emit(this.nuevaData);
    //this.mensajeEvent.emit("this.nuevaData");
  }*/
  /*MostrarMapa(){
    this.ocultarMapa = true;
    this.ocultarMostrar = true;
  }
  OcultarMapa(){
    this.ocultarMapa = false;
    this.ocultarMostrar = false;
  }*/
}
