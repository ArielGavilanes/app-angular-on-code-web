import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearCursoComponent } from './crear-curso.component';
import { Paso1Component } from './paso-1/paso-1.component';
import { Paso2Component } from './paso-2/paso-2.component';
import { Paso3Component } from './paso-3/paso-3.component';

const routes: Routes = [
  {
    path: '',
    component: CrearCursoComponent,
    children: [
      { path: '', redirectTo: 'step-1', pathMatch: 'full'},
      { path: 'step-1', component: Paso1Component },
      { path: 'step-2', component: Paso2Component },
      { path: 'step-3', component: Paso3Component },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearCursoRoutingModule {}
