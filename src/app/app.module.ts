import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VehiculosComponent } from './vehiculos/vehiculos.component';
import {HttpClientModule} from '@angular/common/http';
import { VehiculosService } from './vehiculos/vehiculos.service';

import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './vehiculos/form.component';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  {path:'listar', component:VehiculosComponent} ,
  {path:'entrada', component:FormComponent} ,

];


@NgModule({
  declarations: [
    AppComponent,
    VehiculosComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule ,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
   exports: [RouterModule],
  providers: [VehiculosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
