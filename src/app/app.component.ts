import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'estacionamiento-app';

  vehiculos =  'Estacionamiento'


constructor(private router : Router){}

Listar(){
    this.router.navigate(["listar"]);
  }

  Entrada(){
      this.router.navigate(["entrada"]);
  }
}
