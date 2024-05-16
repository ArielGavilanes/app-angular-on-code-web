import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos.component';
import { CursoEspecificoModule } from './curso-especifico/curso-especifico.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CursosComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    CursoEspecificoModule,
    SharedModule
  ]
})
export class CursosModule { }
