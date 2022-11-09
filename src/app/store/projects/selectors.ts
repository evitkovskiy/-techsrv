import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProjectsState } from './state';

const getState = createFeatureSelector<ProjectsState>('projects');

export const projectsSelectors = {
    projects: createSelector(getState, (state) => state.projects),
    projectsLoading: createSelector(getState, (state) => state.projectsLoading),
    projectsoaded: createSelector(getState, (state) => state.projectsLoaded),
};
