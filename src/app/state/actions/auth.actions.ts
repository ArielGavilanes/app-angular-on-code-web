import { createAction, props } from '@ngrx/store';
import { Login } from 'src/app/database/interface/login.interface';

export enum AuthActionTypes {
  LOGIN = '[Auth] Login',
  LOGIN_SUCCESS = '[Auth] Login Success',
  LOGIN_FAILURE = '[Auth] Login Failure',
}

export const login = createAction(
  AuthActionTypes.LOGIN,
  props<{ payload: Login }>()
);

export const loginSuccess = createAction(
  AuthActionTypes.LOGIN_SUCCESS,
  props<{ token: string; id_rol: number; nombre_usuario: string }>()
);

export const loginFailure = createAction(
  AuthActionTypes.LOGIN_FAILURE,
  props<{ error: any }>()
);
