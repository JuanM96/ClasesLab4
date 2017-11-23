import { Component, OnInit,Input,Inject,Output,EventEmitter } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
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
  nombre:string;
  @Input()
  apellido:string;
  @Input()
  sexo:string;
  @Input()
  direccion:string;
  @Input()
  coordenadas:string;
  @Output() mensajeEvent = new EventEmitter<any>();

  nuevaData:any = {
    nombre:"",
    apellido:"",
    sexo:"",
    direccion:"",
    coordenadas:"",
    nombreBuscado:""
  }
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    console.log(this.nombre);
    let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: { nombre: this.nombre, apellido: this.apellido, sexo: this.sexo, direccion: this.direccion, coordenadas: this.coordenadas }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      this.nuevaData.nombre = result.nombre;
      this.nuevaData.apellido = result.apellido;
      this.nuevaData.sexo = result.sexo;
      this.nuevaData.direccion = result.direccion;
      this.nuevaData.coordenadas = result.coordenadas;
      this.nuevaData.nombreBuscado = this.nombre;
      this.mensajeEvent.emit(this.nuevaData);
    });
  }

  ngOnInit() {
  }
  sendMessage() {
    //this.mensajeEvent.emit(this.nuevaData);
    this.mensajeEvent.emit("this.nuevaData");
  }
}
