import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class MiHttpService {

  constructor(public http:Http) {}

  DameUnaPromesa(url:string){
    return this.http.get(url).toPromise().then(this.ExtraerDato).catch(this.ManejadorDeError);
  }
  ManejadorDeError(error:Response | any){
    return error;
  }
  ExtraerDato(respuesta:Response){
    return respuesta.json()||{};
  }
}
