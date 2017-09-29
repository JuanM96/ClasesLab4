import { Component, OnInit } from '@angular/core';
import { MiHttpService } from '../../servicios/mihttp.service';


@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css']
})
export class ListadoUsuariosComponent implements OnInit {
  listado:any;
  constructor() { }

  ngOnInit() {
  }

}
