import { Component, OnInit,Input,Inject } from '@angular/core';
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
  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  ngOnInit() {
  }

}
