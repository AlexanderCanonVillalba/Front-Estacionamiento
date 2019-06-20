import { Component, OnInit } from '@angular/core';
import { Vehiculos } from './vehiculos';
import { VehiculosService } from './vehiculos.service';
import {Router} from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',

})
export class VehiculosComponent implements OnInit {


vehiculos : Vehiculos[] ;
vehiculo  : Vehiculos;
  constructor(private vehiculosService :  VehiculosService , private router : Router) { }

  ngOnInit() {
     this.vehiculosService.getVehiculo().subscribe(
       vehiculo => this.vehiculos =  vehiculo
     );
  }


  public salida( vehiculo: Vehiculos) : void{
    console.log("fecha en typescript......." + vehiculo.id);

     this.vehiculosService.salida(vehiculo).subscribe(

       vehiculo => this.vehiculo =  vehiculo

    )

    
  }

}
