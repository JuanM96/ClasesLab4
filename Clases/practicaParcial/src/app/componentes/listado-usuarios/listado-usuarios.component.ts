import { Component, OnInit } from '@angular/core';
import { MiHttpService } from '../../servicios/mihttp.service';


@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css']
})
export class ListadoUsuariosComponent implements OnInit {
  listado:any;
  probando:any = {
    "nombre": "admin3",
    "sexo": "admin@admin.com3",
    "mail": "masculino3",
    "usuario": "admin3",
    "password": "admin3",
    "foto": "../../../assets/fotos/pordefecto.png"
}
  constructor(public miHttp:MiHttpService ) { }
  ngOnInit() {
    this.miHttp.DameUnaPromesaPOST("http://localhost:8080/apirest/index.php/usuario/alta",this.probando).then(datos => {console.log(datos)}).catch(error => {console.log(error)});
    this.miHttp.DameUnaPromesaGET("http://localhost:8080/apirest/index.php/usuario/traerTodos").then(datos => {console.log(datos);this.listado = datos}).catch(error => {console.log(error)});
  }

}
