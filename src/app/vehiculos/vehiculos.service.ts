import { Injectable } from '@angular/core';
import { Vehiculos } from './vehiculos';
import { VEHICULOS } from './vehiculos.json';
import { of , Observable , throwError } from 'rxjs';
import {HttpClient , HttpHeaders , HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {map , catchError} from 'rxjs/operators';
import swal from 'sweetalert2';




@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

  private httpHeader = new HttpHeaders({'Content-type' : 'Application/json'})
  private url = 'http://localhost:8083/estacionamiento/api/listavehiculos';
  private urlcreate = "http://localhost:8083/estacionamiento/api/registrarvehiculo";
  private urlsalida = "http://localhost:8083/estacionamiento/api/salida";
  vehiculo  = Vehiculos;
  constructor(private http : HttpClient) { }

  getVehiculo() : Observable<Vehiculos[]> {
    // return of(VEHICULOS);
    return this.http.get<Vehiculos[]>(this.url)

    }

    create(vehiculo : Vehiculos) : Observable<Vehiculos>{
      swal.fire(  'Se ha regitsrado correctamente!',  '',  'success');
      console.log("saber fecha............" +  vehiculo.fechaini);

      return this.http.post<Vehiculos>(this.urlcreate,  vehiculo).pipe(

        catchError( e => {
          swal.fire('error' ,  e.error.mensaje , 'error');
          return throwError(e);
        })
      );
    }



salida(vehiculo : Vehiculos) : Observable<Vehiculos>{

  console.log("saber fecha............" +  vehiculo.fechaini);

  return this.http.post<Vehiculos>(this.urlsalida , vehiculo).pipe(

    catchError( e => {
      swal.fire('Vehiculo con placa : ' +  vehiculo.placa  , "valor a pagar  : "+  e.error.mensaje + " Pesos"  , 'success');
      return throwError(e);
    })
  );

}

}
