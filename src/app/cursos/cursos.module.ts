import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos.component';
import { BusquedaCursoComponent } from './busqueda-curso/busqueda-curso.component';


@NgModule({
  declarations: [
    CursosComponent,
    BusquedaCursoComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule
  ]
})
export class CursosModule { }
