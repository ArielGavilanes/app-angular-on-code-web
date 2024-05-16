import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { WebModule } from './web/web.module';
import { ErrorModule } from './error/error.module';
import { CursosModule } from './cursos/cursos.module';

const routes: Routes = [{ path: '', redirectTo: '/login', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, AuthModule, WebModule, CursosModule, ErrorModule],
})
export class AppRoutingModule {}
