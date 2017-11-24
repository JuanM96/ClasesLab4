import { Injectable } from '@angular/core';

import {Http ,Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MiHttpService {
  Miurl = "http://localhost:8080/apirestEmpleados/"
  constructor(public http:Http) { }
  
  public httpGetPromise(url: string){


    return this.http
    .get(this.Miurl+url)
    .toPromise()
    .then(this.extraerDatos)
    .catch(this.handleError);
  }
  public httpPostPromise(url: string, objeto:any){
    
    
        return this.http
        .post(this.Miurl+url,objeto)
        .toPromise()
        .then(this.extraerDatos)
        .catch(this.handleError);
      }

  private extraerDatos(resp:Response) {

      return resp.json() || {};

  }
  private handleError(error:Response | any) {

      return error;
  }

}
