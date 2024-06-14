import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './categorias.component';
import { CursosPorCategoriaComponent } from './cursos-por-categoria/cursos-por-categoria.component';
import { AuthGuard } from '../auth/guard/auth.guard';

const routes: Routes = [
  {
    path: 'categorias',
    component: CategoriasComponent,
    children: [
      {
        path: ':nombre_categoria',
        component: CursosPorCategoriaComponent,
        canActivate: [AuthGuard]
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriasRoutingModule {}
