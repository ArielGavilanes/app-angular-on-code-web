import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { WebModule } from './web/web.module';
import { ErrorModule } from './error/error.module';
import { CursosModule } from './cursos/cursos.module';
import { CategoriasModule } from './categorias/categorias.module';
import { UsersModule } from './users/users.module';
import { CursoEspecificoModule } from './cursos/curso-especifico/curso-especifico.module';

const routes: Routes = [{ path: '', redirectTo: '/login', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule,
    AuthModule,
    WebModule,
    CursosModule,
    CategoriasModule,
    UsersModule,
    ErrorModule,
    CursoEspecificoModule
  ],
})
export class AppRoutingModule {}
