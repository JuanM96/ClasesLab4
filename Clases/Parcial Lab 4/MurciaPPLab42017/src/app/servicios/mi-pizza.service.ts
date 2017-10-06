import { Injectable } from '@angular/core';
import { MiHttpService } from './mihttp.service';

@Injectable()
export class MiPizzaService {
  listado:any;
  constructor(public miHttp:MiHttpService) { }
  DameLasPizzas():any{
    return this.miHttp.DameUnaPromesaGET("pizza/traerTodos");
  }
  TeDoyUnaPizza(body:any):any{
    return this.miHttp.DameUnaPromesaPOST("pizza/alta",body);
  }
  BorrameUnaPizza(body:any):any{
    return this.miHttp.DameUnaPromesaPOST("pizza/baja",body);
  }

}
