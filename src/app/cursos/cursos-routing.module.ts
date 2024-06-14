import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './cursos.component';
import { CursoEspecificoComponent } from './curso-especifico/curso-especifico.component';
import { BusquedaCursoComponent } from './busqueda-curso/busqueda-curso.component';
import { CrearCursoModule } from './crear-curso/crear-curso.module';
import { AuthGuard } from '../auth/guard/auth.guard';

const routes: Routes = [
  {
    path: 'cursos',
    component: CursosComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'create',
        loadChildren: () =>
          import('./crear-curso/crear-curso.module').then(
            (m) => m.CrearCursoModule
          ),
      },
      { path: ':id_curso', component: CursoEspecificoComponent },
      { path: '', component: BusquedaCursoComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursosRoutingModule {}
