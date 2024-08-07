import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { CategoriasComponent } from './categorias.component';
import { SharedModule } from '../shared/shared.module';
import { CursosPorCategoriaModule } from './cursos-por-categoria/cursos-por-categoria.module';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [CategoriasComponent],
  imports: [
    CommonModule,
    CategoriasRoutingModule,
    SharedModule,
    CursosPorCategoriaModule,
    CardModule
  ],
})
export class CategoriasModule {}
