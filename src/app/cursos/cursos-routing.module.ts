import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './cursos.component';
import { CursoEspecificoComponent } from './curso-especifico/curso-especifico.component';

const routes: Routes = [
  {
    path: 'cursos',
    component: CursosComponent,
    children: [
      { path: ':id_curso', component: CursoEspecificoComponent },
      // {path: ':query_curso', component: }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursosRoutingModule {}
