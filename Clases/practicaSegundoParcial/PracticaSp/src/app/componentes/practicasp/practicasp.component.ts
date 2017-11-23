import { Component, OnInit } from '@angular/core';
import { MiHttpService } from '../../servicios/mi-http.service';
import { AuthService } from '../../servicios/auth/auth.service';
import { Angular2Csv } from 'angular2-csv/Angular2-csv'
@Component({
  selector: 'app-practicasp',
  templateUrl: './practicasp.component.html',
  styleUrls: ['./practicasp.component.css']
})
export class PracticaspComponent implements OnInit {
  listado:any;
  constructor(public miHttp:MiHttpService,public miAuth:AuthService) { }

  ngOnInit() {
    this.Actualizar();
  }
  dataModificada($event){
    console.info($event);
    this.miHttp.httpPostPromise("http://localhost"/*:8080*/+"/apirestjugadores/persona/modificacion",$event)
    .then(datos => {
      console.log(JSON.stringify(datos));
      alert(datos["respuesta"]);
      this.Actualizar();
    })
    .catch(error => {console.log(error)});
  }
  Actualizar(){
    this.miHttp.httpGetPromise("http://localhost/apirestjugadores/persona/traerTodos")
    .then(datos => {
      //console.info(datos)
      this.listado = datos;
      console.info(this.listado);
    })
  }
  LogOut(){
    this.miAuth.logOut();
  }
  Download(){
    var options = { 
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true, 
      showTitle: true,
      headers: ['Nombre','ID','Apellido','sexo','Direccion','Coordenadas'] 
    };
    new Angular2Csv(this.listado, 'Listado',options);
  }
}
