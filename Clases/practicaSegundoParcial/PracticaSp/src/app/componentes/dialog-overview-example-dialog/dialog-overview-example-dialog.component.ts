import {Component, Inject,OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-dialog-overview-example-dialog',
  templateUrl: './dialog-overview-example-dialog.component.html',
  styleUrls: ['./dialog-overview-example-dialog.component.css']
})
export class DialogOverviewExampleDialog {
  nuevoUsuario:any = {
    nombre:"",
    apellido:"",
    sexo:"",
    direccion:"",
    coordenadas:""
  }
    constructor(
      public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any) { }
  
    onNoClick(): void {
      this.dialogRef.close(this.nuevoUsuario);
    }
    OnClick(){
      this.dialogRef.close(this.nuevoUsuario);
    }
    ngOnInit() {
      console.info(this.data);
      this.nuevoUsuario = this.data;
    }
  
  }
