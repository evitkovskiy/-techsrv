import { createReducer, on } from '@ngrx/store';
import { initialState } from './state';
import { projectsActions } from './actions';

export const projectsReducer = createReducer(
  initialState,
  on(projectsActions.loadProjects, (state) => ({
    ...state,
    customersLoading: true,
    customersLoaded: false,
  })),
  on(projectsActions.loadProjectsFailed, (state) => ({
    ...state,
    customersLoading: false,
    customersLoaded: false,
  })),
  on(projectsActions.loadProjectsSuccess, (state, { payload }) => ({
    ...state,
    ...payload,
    customersLoading: false,
    customersLoaded: true,
  })),
  );
