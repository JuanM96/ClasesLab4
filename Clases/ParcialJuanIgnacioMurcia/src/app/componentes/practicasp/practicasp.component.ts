import { Component, OnInit } from '@angular/core';
import { MiHttpService } from '../../servicios/mi-http.service';
import { EmpleadoService } from '../../servicios/empleado.service';
import { AuthService } from '../../servicios/auth/auth.service';
import { Angular2Csv } from 'angular2-csv/Angular2-csv'
@Component({
  selector: 'app-practicasp',
  templateUrl: './practicasp.component.html',
  styleUrls: ['./practicasp.component.css']
})
export class PracticaspComponent implements OnInit {
  listado:any;
  constructor(public miHttp:EmpleadoService,public miAuth:AuthService) { }

  ngOnInit() {
    this.Actualizar();
  }
  dataModificada($event){
    this.Actualizar();
  }
  Actualizar(){
    this.miHttp.DameLosEmpleados()
    .then(datos => {
      //console.info(datos)
      this.listado = datos;
      console.info(this.listado);
    })
  }
  LogOut(){
    this.miAuth.logOut();
  }
  /*Download(){
    var options = { 
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true, 
      showTitle: true,
      headers: ['Nombre','ID','Apellido','sexo','Direccion','Coordenadas'] 
    };
    new Angular2Csv(this.listado, 'Listado',options);
  }*/
}
