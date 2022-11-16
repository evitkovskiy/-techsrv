import { createAction, props } from '@ngrx/store';
import { IProjects } from 'src/app/interfaces/projects.interface';

// Interfaces
import { Payload, ErrorResponse } from '../../interfaces/responce.interface';


export const projectsActions = {
  loadProjects: createAction('[Projects] Load Projects'),
  loadProjectsFailed: createAction('[Projects] Load Projects Failed', props<Payload<ErrorResponse>>()),
  loadProjectsSuccess: createAction('[Projects] Load Projects Projects', props<Payload<IProjects>>()),
};
