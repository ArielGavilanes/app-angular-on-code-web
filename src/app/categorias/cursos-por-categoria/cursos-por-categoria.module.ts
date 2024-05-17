import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosPorCategoriaComponent } from './cursos-por-categoria.component';
import { CursosListComponent } from './cursos-list/cursos-list.component';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [CursosPorCategoriaComponent, CursosListComponent],
  imports: [
    CommonModule,
    CardModule
  ],
})
export class CursosPorCategoriaModule {}
