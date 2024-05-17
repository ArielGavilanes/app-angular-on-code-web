import { ActionReducerMap } from '@ngrx/store';
import { AuthState } from '../core/models/auth.state';
import { authReducer } from './reducers/auth.reducer';
import { SearchState } from '../core/models/search.state';
import { searchReducer } from './reducers/search.reducer';

export interface AppState {
  auth: AuthState;
  search: SearchState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  auth: authReducer,
  search: searchReducer
}
