import { Component, OnInit } from '@angular/core';
import { MiHttpService } from '../../servicios/mi-http.service';
@Component({
  selector: 'app-practicasp',
  templateUrl: './practicasp.component.html',
  styleUrls: ['./practicasp.component.css']
})
export class PracticaspComponent implements OnInit {
  listado:any;
  constructor(public miHttp:MiHttpService) { }

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
  
}
