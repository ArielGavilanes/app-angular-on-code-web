import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { DatabaseService } from 'src/app/database/database.service';
import * as SearchActions from 'src/app/state/actions/search.actions';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SearchEffects {
  constructor(
    private actions$: Actions,
    private databaseService: DatabaseService,
    private router: Router
  ) {}

  search$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SearchActions.search),
      switchMap(({ query_curso }) => {
        console.log('query', query_curso);
        return this.databaseService.searchCursos(query_curso).pipe(
          map((foundedCursos) => {
            return SearchActions.searchSuccess({
              foundedCursos: foundedCursos,
            });
          }),
          catchError((error) => {
            const errorMessage: String = 'Sin resultados';
            return of(SearchActions.searchFailure({ message: errorMessage }));
          })
        );
      })
    )
  );
}
