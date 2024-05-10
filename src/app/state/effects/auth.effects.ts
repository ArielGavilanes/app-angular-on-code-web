import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { DatabaseService } from 'src/app/database/database.service';
import * as AuthActions from 'src/app/state/actions/auth.actions';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private databaseService: DatabaseService,
    private cookieService: CookieService,
    private router: Router
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      switchMap(({ payload }) => {
        console.log('payload', payload)
        return this.databaseService.loginUser(payload).pipe(
          map(({ token, id_rol, nombre_usuario }) => {
            this.cookieService.set('token', token)
            this.router.navigate(['/dashboard']);
            return AuthActions.loginSuccess({ token, id_rol, nombre_usuario });
          }),
          catchError((error) => {
            const errorMessage: String = 'Usuario o Contraseña incorrectas';
            return of(AuthActions.loginFailure({ error: errorMessage }));
          })
        );
      })
    )
  );
}
