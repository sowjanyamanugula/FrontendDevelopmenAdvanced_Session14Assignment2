import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PublicapiserviceService {
 public _url:string="http://api.fixer.io/latest";
  constructor(private _http:Http) { }
   getforeignexchange(){
         return this._http.get(this._url)
            .map((response:Response) => response.json());
   }
}
 