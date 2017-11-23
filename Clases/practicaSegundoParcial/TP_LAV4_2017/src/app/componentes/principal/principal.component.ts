import { Component, OnInit } from '@angular/core';
import { MiHttpService } from '../../servicios/mi-http.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  public status: any = {
    isFirstOpen: true,
    isFirstDisabled: false
  };

  usuarioLogIn:any={
    username:"",
    password:""
  }
  usuarioSignUp:any={
    username:"",
    password:"",
    email:""
  }
  constructor(public miHttp:MiHttpService,private route: ActivatedRoute,private router: Router) {  }

  ngOnInit() {
    // localStorage.setItem("token","por ahora no funciona la api");
    // if (localStorage.getItem("lista") == null) {
    //   localStorage.setItem("lista","");
    // }
    // if (localStorage.getItem("usuario") == null) {
    //   localStorage.setItem("usuario","");
    // }
    // if (localStorage.getItem("listaUsuario") == null) {
    //   localStorage.setItem("listaUsuario","");
    // }
  }
  LogIn(){
    this.miHttp.httpPostPromise("http://localhost"/*:8080*/+"/apirestjugadores/jugador/logIn",this.usuarioLogIn)
    .then(datos => {
      //console.info(datos);
      console.log(JSON.stringify(datos));
      localStorage.setItem("token",datos["token"]);
      localStorage.setItem("usuario",datos["jugador"]["usuario"]);
      this.router.navigate(['/PSP']);
    })
    .catch(error => {console.log(error)});
    /*let logIn:boolean = false;
    let ListadoUsuarios:Array<any> = new Array<any>();
    ListadoUsuarios = JSON.parse(localStorage.getItem('listaUsuario'));
    // ListadoUsuarios.forEach(element => {
    //   if (element.username == this.usuarioLogIn.username && element.password == this.usuarioLogIn.password) {
    //     logIn = true;
    //     console.log("Login = "+logIn);
    //     localStorage.setItem("usuario",element.username);
    //     this.router.navigate(['/Juegos']);
    //   }
    // });
    console.log(ListadoUsuarios);
    for (var i = 0; i < ListadoUsuarios.length; i++) {
      var element = ListadoUsuarios[i];
      console.log("holas");
      if (element.username == this.usuarioLogIn.username && element.password == this.usuarioLogIn.password) {
        logIn = true;
        console.log("Login = "+logIn);
        localStorage.setItem("usuario",element.username);
        this.router.navigate(['/Juegos']);
      }
    }*/
  }
  SignUp(){
     this.miHttp.httpPostPromise("http://localhost"/*:8080*/+"/apirestjugadores/jugador/alta",this.usuarioSignUp)
    .then(datos => {
      console.log(JSON.stringify(datos));
      alert(datos["respuesta"]);
    })
    .catch(error => {console.log(error)});
    /*let aux:any;
    let lista:Array<any> = new Array<any>();
    aux = localStorage.getItem('listaUsuario');
    console.info(localStorage.getItem('listaUsuario'));
    //console.info(JSON.parse(localStorage.getItem('listaUsuario')));
    if (aux != "") {
      lista.push( JSON.parse(localStorage.getItem('listaUsuario')));
      console.info("lista != "+aux);
      lista.push(this.usuarioSignUp);
      localStorage.setItem('listaUsuario',JSON.stringify(lista));
    }
    else{
      console.log("listao else"+lista);
      localStorage.setItem('listaUsuario',JSON.stringify(this.usuarioSignUp));
    }*/
  }
  LogInTest(){
    this.usuarioLogIn.username = "admin";
    this.usuarioLogIn.password = "123";
    this.LogIn();
  }

}