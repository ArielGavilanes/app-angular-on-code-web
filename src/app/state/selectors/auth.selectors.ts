import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "src/app/core/models/auth.state";

export const selectAuthState = createFeatureSelector<AuthState>('auth')

export const selectAuthError = createSelector(
  selectAuthState,
  (state: AuthState) => state.error
)
