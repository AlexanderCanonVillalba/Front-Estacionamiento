import { Component, OnInit } from '@angular/core';
import { Vehiculos } from './vehiculos';
import { VehiculosService } from './vehiculos.service';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',

})
export class VehiculosComponent implements OnInit {


vehiculos : Vehiculos[] ;
  constructor(private vehiculosService :  VehiculosService) { }

  ngOnInit() {
     this.vehiculosService.getVehiculo().subscribe(
       vehiculo => this.vehiculos =  vehiculo  
     );
  }

}
