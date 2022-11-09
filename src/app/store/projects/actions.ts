import { createAction, props } from '@ngrx/store';
import { IProject } from 'src/app/interfaces/projects.interface';

export interface ProjectsResponse extends BaseResponse {
    projects: IProject[];
  }
  

export interface Payload<T> {
    payload: T;
  }

  export interface BaseResponse {
    message?: string;
  }
  
  export interface ErrorResponse {
    error?: BaseResponse;
  }
  

export const projectsActions = {
  loadProjects: createAction('[Projects] Load Projects'),
  loadProjectsFailed: createAction('[Projects] Load Projects Failed', props<Payload<any>>()),
  loadProjectsSuccess: createAction('[Projects] Load Projects Projects', props<Payload<any>>()),
};
