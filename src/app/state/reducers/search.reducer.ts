import { createReducer, on } from '@ngrx/store';
import { SearchState } from 'src/app/core/models/search.state';
import * as SearchActions from 'src/app/state/actions/search.actions';

export const initialState: SearchState = {
  isLoading: true,
  foundedCursos: null,
  message: null,
};

export const searchReducer = createReducer(
  initialState,
  on(SearchActions.search, (state, { query_curso }) => ({
    ...state,
    isLoading: true,
  })),
  on(SearchActions.searchSuccess, (state, { foundedCursos }) => ({
    ...state,
    foundedCursos,
    isLoading: false,
  })),
  on(SearchActions.searchFailure, (state, { message }) => ({
    ...state,
    message,
    isLoading: false,
  }))
);
