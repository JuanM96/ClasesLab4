import { MiHttpService } from '../../servicios/mihttp.service';
import { Component, OnInit } from '@angular/core';
import { MiPizzaService } from '../../servicios/mi-pizza.service';
import { PizzaComponent } from '../pizza/pizza.component';


@Component({
  selector: 'app-pizzas-listado',
  templateUrl: './pizzas-listado.component.html',
  styleUrls: ['./pizzas-listado.component.css']
})
export class PizzasListadoComponent implements OnInit {
  listado:any;
  mostrarAlta:Boolean = false;
  unaPizza = {
    "sabor": "Excelente",
    "tipo": "Molde",
    "cantidad": 2,
    "foto": "../../../assets/fotos/TomateYRucula.jpg"
  }

  fotos = [ 
    {value: '../../../assets/fotos/Hawaiana.jpg', viewValue: 'Hawaiana'},
    {value: '../../../assets/fotos/Salame.jpg', viewValue: 'Salame'},
    {value: '../../../assets/fotos/TomateYRucula.jpg', viewValue: 'TomateYRucula'},
  ];
  tipos = [ 
    {value: 'molde', viewValue: 'Molde'},
    {value: 'piedra', viewValue: 'Piedra'}
  ];
  pizzaAlta:any ={
    "sabor":"",
    "tipo":"",
    "cantidad":"" ,
    "foto":""
  }
  // sabor:string;
  // tipo:string;
  // cantidad:number;
  // foto:string;

  constructor(public miPizza:MiPizzaService,public miHttp:MiHttpService ) { }
  ngOnInit() {
    this.miPizza.DameLasPizzas().then(datos => {console.log(datos);this.listado = datos}).catch(error => {console.log(error)});
  }
  Actualizar(){
    this.miPizza.DameLasPizzas().then(datos => {console.log(datos);this.listado = datos}).catch(error => {console.log(error)});
  }
  AltaPizza(){
    // let pizzaAlta={
    //   "sabor":this.sabor,
    //   "tipo":this.tipo,
    //   "cantidad":this.cantidad ,
    //   "foto":this.foto
    // };
    console.info(this.pizzaAlta);
    if (this.pizzaAlta.foto == null || this.pizzaAlta.foto == "") {
      this.pizzaAlta.foto = "../../../assets/fotos/pordefecto.png";
    }
    this.miPizza.TeDoyUnaPizza(this.pizzaAlta)
    .then(
      datos => {
        console.log(datos);
        this.pizzaAlta ={
          "sabor":"",
          "tipo":"",
          "cantidad":"" ,
          "foto":""
        }
        // this.sabor = "";
        // this.tipo = "";
        // this.cantidad = 0;
        // this.foto = "";
        this.mostrarAlta = false;
        this.Actualizar();
      }
    )
     .catch(error => {console.log(error)});    

}
BorrarPizza(sabor:string,tipo:string,cantidad:number,foto:string){
    let Pizza = {
      "sabor": sabor,
      "tipo": tipo,
      "cantidad": cantidad ,
      "foto": foto
    }
    console.log(Pizza);
    this.miPizza.BorrameUnaPizza(Pizza).then(datos => {console.log(datos); this.Actualizar();}).catch(error => {console.log(error)});
}
  /*Limpiar(){
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
  }*/
}
