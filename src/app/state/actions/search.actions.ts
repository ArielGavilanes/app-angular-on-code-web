import { createAction, props } from '@ngrx/store';

export enum AuthActionTypes {
  SEARCH = '[Search] Search',
  SEARCH_SUCCESS = '[Search] Search Success',
  SEARCH_FAILURE = '[Search] Search Failure',
}

export const search = createAction(
  AuthActionTypes.SEARCH,
  props<{ query_curso: string }>()
);

export const searchSuccess = createAction(
  AuthActionTypes.SEARCH_SUCCESS,
  props<{ foundedCursos: any[] }>()
);

export const searchFailure = createAction(
  AuthActionTypes.SEARCH_FAILURE,
  props<{ message: any }>()
);
