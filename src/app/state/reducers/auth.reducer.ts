import { createReducer, on } from '@ngrx/store';
import { AuthState } from 'src/app/core/models/auth.state';
import * as AuthActions from 'src/app/state/actions/auth.actions';

export const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
  id_rol: null,
  nombre_usuario: null,
  error: null,
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.loginSuccess, (state, { token, id_rol, nombre_usuario }) => ({
    ...state,
    isAuthenticated: true,
    token,
    id_rol,
    nombre_usuario,
    error: null,
  })),
  on(AuthActions.loginFailure, (state, { error }) => ({
    ...state,
    isAuthenticated: false,
    error,
  }))
);
