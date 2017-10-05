import { Component, OnInit } from '@angular/core';
import { MiHttpService } from '../../servicios/mihttp.service';

@Component({
  selector: 'app-mostrar-usuario',
  templateUrl: './mostrar-usuario.component.html',
  styleUrls: ['./mostrar-usuario.component.css']
})
export class MostrarUsuarioComponent implements OnInit {
  mostrarUsuario:Boolean = false;
  mostrarTabla:Boolean = false;
  usuarioBuscado:any={
    "nombre":"",
    "mail":"",
    "sexo":"",
    "usuario":"",
    "password":"",
    "foto":""
  };
  usuarioMostrar:any ={
    "usuario":""
  };
  constructor(public miHttp:MiHttpService) { }

  ngOnInit() {
  }
  MostrarUsuario(){
    this.miHttp.DameUnaPromesaPOST("http://localhost"/*:8080*/+"/apirest/index.php/usuario/traerUno",this.usuarioMostrar).then(datos => {console.log(datos);this.usuarioBuscado = datos}).catch(error => {console.log(error)});        
    this.mostrarTabla = true;

  }
  Limpiar(){
    if (this.usuarioMostrar.usuario != "") {
      this.usuarioBuscado ={
        "nombre":"",
        "mail":"",
        "sexo":"",
        "usuario":"",
        "password":"",
        "foto":""
      };
      this.usuarioMostrar.usuario = "";
      this.CerrarTabla();
    }
  }
  CerrarTabla(){
    this.mostrarTabla = false;
  }
}
