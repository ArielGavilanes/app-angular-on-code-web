import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultadosCursoComponent } from './resultados-curso/resultados-curso.component';
import { BusquedaCursoComponent } from './busqueda-curso.component';
import { RouterModule } from '@angular/router';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DividerModule } from 'primeng/divider';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [ResultadosCursoComponent, BusquedaCursoComponent],
  imports: [
    CommonModule,
    RouterModule,
    ProgressSpinnerModule,
    DividerModule,
    DataViewModule,
    ButtonModule
  ],
})
export class BusquedaCursoModule {}
