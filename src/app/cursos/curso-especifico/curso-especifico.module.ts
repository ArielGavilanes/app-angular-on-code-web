import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoEspecificoComponent } from './curso-especifico.component';
import { PortadaCursoComponent } from './portada-curso/portada-curso.component';
import { ContenidoCursoComponent } from './contenido-curso/contenido-curso.component';
import { CardModule } from 'primeng/card';



@NgModule({
  declarations: [
    CursoEspecificoComponent,
    PortadaCursoComponent,
    ContenidoCursoComponent
  ],
  imports: [
    CommonModule,
    CardModule
  ]
})
export class CursoEspecificoModule { }
