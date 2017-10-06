import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class MiHttpService {

  constructor(public http:Http) {}

  DameUnaPromesaGET(url:string){
    return this.http.get("http://localhost:8080/apirest/index.php/"+url).toPromise().then(this.ExtraerDato).catch(this.ManejadorDeError);
  }
  DameUnaPromesaPOST(url:string,body:any){
    return this.http.post("http://localhost:8080/apirest/index.php/"+url,body).toPromise().then(this.ExtraerDato).catch(this.ManejadorDeError);
  }
  ManejadorDeError(error:Response | any){
    return error;
  }
  ExtraerDato(respuesta:Response){
    return respuesta.json()||{};
  }
}
