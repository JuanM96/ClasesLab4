import { Component, OnInit } from '@angular/core';
import { MiHttpService } from '../../servicios/mi-http.service';
import { EmpleadoService } from '../../servicios/empleado.service';
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
  tipos = [ 
    {values: 'jefe', viewValue: 'Jefe'},
    {values: 'operario', viewValue: 'Operario'}
  ];
  usuarioLogIn:any={
    nombre:"",
    password:"",
    tipo:""
  }
  usuarioSignUp:any={
    nombre:"",
    password:"",
    tipo:"",
    legajo:"",
    edad:"",
    foto:""
  }
  constructor(public miAccesoEmpleado:EmpleadoService,private route: ActivatedRoute,private router: Router) {  }

  ngOnInit() {
  }
  LogIn(){
    this.miAccesoEmpleado.LogeameUnEmpleado(this.usuarioLogIn)
    .then(datos => {
      //console.info(datos);
      console.log(JSON.stringify(datos));
      localStorage.setItem("token",datos["token"]);
      this.router.navigate(['/PSP']);
    })
    .catch(error => {console.log(error)});
  }
  SignUp(){
     this.miAccesoEmpleado.TeDoyUnEmpleado(this.usuarioSignUp)
    .then(datos => {
      console.log(JSON.stringify(datos));
      alert(datos["respuesta"]);
    })
    .catch(error => {console.log(error)});
  }
  LogInTest(){
    this.usuarioLogIn.nombre = "admin";
    this.usuarioLogIn.password = "123";
    this.usuarioLogIn.tipo = "jefe";
    this.LogIn();
  }

}