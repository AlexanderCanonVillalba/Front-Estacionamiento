import { Injectable } from '@angular/core';
import { Vehiculos } from './vehiculos';
import { VEHICULOS } from './vehiculos.json';
import { of , Observable , throwError } from 'rxjs';
import {HttpClient , HttpHeaders} from '@angular/common/http';
import {map , catchError} from 'rxjs/operators';
import swal from 'sweetalert2';




@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

  private httpHeader = new HttpHeaders({'Content-type' : 'Application/json'})
  private url = 'http://localhost:8083/estacionamiento/api/listavehiculos';
  private urlcreate = "http://localhost:8083/estacionamiento/api/registrarvehiculo";

  constructor(private http : HttpClient) { }

  getVehiculo() : Observable<Vehiculos[]> {
    // return of(VEHICULOS);
    return this.http.get<Vehiculos[]>(this.url)

    }

    create(vehiculo : Vehiculos) : Observable<Vehiculos>{
      swal.fire(  'Se ha regitsrado correctamente!',  '',  'success');
      console.log("saber fecha............" +  vehiculo.fechaini);
      return this.http.post<Vehiculos>(this.urlcreate,  vehiculo ).pipe(

        catchError( e => {
          swal.fire('error' ,  e.error.mensaje , 'error');
          return throwError(e);
        })
      );
    }
}
