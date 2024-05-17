import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultadosCursoComponent } from './resultados-curso/resultados-curso.component';
import { BusquedaCursoComponent } from './busqueda-curso.component';
import { RouterModule } from '@angular/router';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DividerModule } from 'primeng/divider';

@NgModule({
  declarations: [ResultadosCursoComponent, BusquedaCursoComponent],
  imports: [CommonModule, RouterModule, ProgressSpinnerModule, DividerModule],
})
export class BusquedaCursoModule {}
