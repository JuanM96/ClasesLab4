import { Component, OnInit } from '@angular/core';
import { MiHttpService } from '../../servicios/mihttp.service';


@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css']
})
export class ListadoUsuariosComponent implements OnInit {
  listado:any;
  mostrarAlta:Boolean = false;

  fotos = [ 
    {value: '../../../assets/fotos/111111.jpg', viewValue: '111111'},
    {value: '../../../assets/fotos/123456.jpg', viewValue: '123456'},
    {value: '../../../assets/fotos/222222.jpg', viewValue: '222222'},
    {value: '../../../assets/fotos/333333.jpg', viewValue: '333333'},
    {value: '../../../assets/fotos/444444.jpg', viewValue: '444444'},
    {value: '../../../assets/fotos/555555.jpg', viewValue: '555555'},
    {value: '../../../assets/fotos/777777.jpg', viewValue: '777777'},
    {value: '../../../assets/fotos/888888.jpg', viewValue: '888888'},
    {value: '../../../assets/fotos/999999.jpg', viewValue: '999999'}
  ];
  sexos = [ 
    {value: 'masculino', viewValue: 'Masculino'},
    {value: 'femenino', viewValue: 'Femenino'}
  ];
  usuarioAlta:any ={
    "nombre":"",
    "mail":"",
    "sexo":"",
    "usuario":"",
    "password":"",
    "foto":""
  }

  constructor(public miHttp:MiHttpService ) { }
  ngOnInit() {
    this.miHttp.DameUnaPromesaGET("http://localhost"/*:8080*/+"/apirest/index.php/usuario/traerTodos").then(datos => {console.log(datos);this.listado = datos}).catch(error => {console.log(error)});
  }
  Actualizar(){
    this.miHttp.DameUnaPromesaGET("http://localhost"/*:8080*/+"/apirest/index.php/usuario/traerTodos").then(datos => {console.log(datos);this.listado = datos}).catch(error => {console.log(error)});    
  }
  AltaUsuario(){
    console.info(this.usuarioAlta);
    if (this.usuarioAlta.foto == null || this.usuarioAlta.foto == "") {
      this.usuarioAlta.foto = "../../../assets/fotos/pordefecto.png";
    }
    this.miHttp.DameUnaPromesaPOST("http://localhost"/*:8080*/+"/apirest/index.php/usuario/alta",this.usuarioAlta)
    .then(
      datos => {
        console.log(datos)
        this.usuarioAlta ={
          "nombre":"",
          "mail":"",
          "sexo":"",
          "usuario":"",
          "password":"",
          "foto":""
        };
        this.mostrarAlta = false;
        this.Actualizar();
      }
    )
     .catch(error => {console.log(error)});    

  }
  BorrarUsuario(usuarioBaja:string){
    let usuario:any = {
      "usuario":usuarioBaja
    }
    this.miHttp.DameUnaPromesaPOST("http://localhost"/*:8080*/+"/apirest/index.php/usuario/baja",usuario).then(datos => {console.log(datos); this.Actualizar();}).catch(error => {console.log(error)});
  }
  Limpiar(){
    if (this.usuarioAlta.nombre != "" || this.usuarioAlta.mail != "" || this.usuarioAlta.sexo != "" || this.usuarioAlta.usuario != "" || this.usuarioAlta.password != "" || this.usuarioAlta.foto != "" ) {
      this.usuarioAlta ={
        "nombre":"",
        "mail":"",
        "sexo":"",
        "usuario":"",
        "password":"",
        "foto":""
      };
    }
  }
}
