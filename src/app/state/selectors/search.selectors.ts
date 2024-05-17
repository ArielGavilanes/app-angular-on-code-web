import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SearchState } from "src/app/core/models/search.state";

export const selectSearchState = createFeatureSelector<SearchState>('search')

export const selectSearchLoading = createSelector(
  selectSearchState,
  (state: SearchState) => state.isLoading
)

export const selectSearchFoundedCursos = createSelector(
  selectSearchState,
  (state: SearchState) => state.foundedCursos
)

export const selectSearchError = createSelector(
  selectSearchState,
  (state: SearchState) => state.message
)
