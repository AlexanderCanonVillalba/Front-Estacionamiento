import { Injectable } from '@angular/core';
import { Vehiculos } from './vehiculos';
import { VEHICULOS } from './vehiculos.json';
import { of , Observable } from 'rxjs';
import {HttpClient , HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

  private httpHeader = new HttpHeaders({'Content-type' : 'Application/json'})
  private url:string = 'http://localhost:8083/estacionamiento/api/listavehiculos';
  private urlcreate : string  = "http://localhost:8083/estacionamiento/api/registrarvehiculo";

  constructor(private http : HttpClient) { }

  getVehiculo() : Observable<Vehiculos[]> {
    // return of(VEHICULOS);
    return this.http.get<Vehiculos[]>(this.url)

    }

    create(vehiculo : Vehiculos) : Observable<Vehiculos>{      
      return this.http.post<Vehiculos>(this.urlcreate,  vehiculo , { headers :this.httpHeader})
    }
}
