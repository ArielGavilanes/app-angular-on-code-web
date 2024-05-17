import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos.component';
import { CursoEspecificoModule } from './curso-especifico/curso-especifico.module';
import { SharedModule } from '../shared/shared.module';
import { BusquedaCursoModule } from './busqueda-curso/busqueda-curso.module';
import { EffectsModule } from '@ngrx/effects';
import { SearchEffects } from '../state/effects/search.effects';

@NgModule({
  declarations: [CursosComponent],
  imports: [
    CommonModule,
    CursosRoutingModule,
    CursoEspecificoModule,
    SharedModule,
    BusquedaCursoModule,
    // EffectsModule.forRoot([SearchEffects]),
  ],
})
export class CursosModule {}
