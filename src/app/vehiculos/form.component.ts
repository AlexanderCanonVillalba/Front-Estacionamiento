import { Component, OnInit } from '@angular/core';
import { Vehiculos} from './vehiculos';
import { VehiculosService}  from './vehiculos.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'

})
export class FormComponent implements OnInit {

  private vehiculo :  Vehiculos = new Vehiculos();

  constructor(private vehiculosService : VehiculosService , private router : Router) { }

  ngOnInit() {
  }

  public create() : void{
    console.log("fecha en typescript......." +  this.vehiculo.fechaini +  this.vehiculo.horaini);
      this.vehiculosService.create(this.vehiculo).subscribe(
        response => this.router.navigate(["/listar"])
      )
  }
}
