import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './categorias.component';
import { CursosPorCategoriaComponent } from './cursos-por-categoria/cursos-por-categoria.component';

const routes: Routes = [
  {path: 'categorias', component: CategoriasComponent,
    children: [
      { path: ':nombre_categoria', component: CursosPorCategoriaComponent}
    ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriasRoutingModule { }
