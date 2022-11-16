import { createReducer, on } from '@ngrx/store';
import { initialState } from './state';
import { projectsActions } from './actions';

export const projectsReducer = createReducer(
  initialState,
  on(projectsActions.loadProjects, (state) => ({
    ...state,
    projectsLoading: true,
    projectsLoaded: false,
  })),
  on(projectsActions.loadProjectsFailed, (state) => ({
    ...state,
    projectsLoading: false,
    projectsLoaded: false,
  })),
  on(projectsActions.loadProjectsSuccess, (state, { payload }) => ({
    ...state,
    projects: payload,
    projectsLoading: false,
    projectsLoaded: true,
  })),
  );
