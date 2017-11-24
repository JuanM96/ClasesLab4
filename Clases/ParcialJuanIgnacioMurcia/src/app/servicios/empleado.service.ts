import { Injectable } from '@angular/core';
import { MiHttpService } from './mi-http.service';

@Injectable()
export class EmpleadoService {
  listado:any;
  constructor(public miHttp:MiHttpService) { }
  DameLosEmpleados():any{
    return this.miHttp.httpGetPromise("empleado/traerTodos");
  }
  TeDoyUnEmpleado(body:any):any{
    return this.miHttp.httpPostPromise("empleado/alta",body);
  }
  BorrameUnEmpleado(body:any):any{
    return this.miHttp.httpPostPromise("empleado/baja",body);
  }
  LogeameUnEmpleado(body:any):any{
    return this.miHttp.httpPostPromise("ingreso/logIn",body);    
  }
}