import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultadosCursoComponent } from './resultados-curso/resultados-curso.component';
import { BusquedaCursoComponent } from './busqueda-curso.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ResultadosCursoComponent,
    BusquedaCursoComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class BusquedaCursoModule { }
