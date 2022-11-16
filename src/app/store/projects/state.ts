import { IProjects } from 'src/app/interfaces/projects.interface';

export interface ProjectsState {
  projects: IProjects;
  projectsLoading: boolean;
  projectsLoaded: boolean;
}

export const initialState: ProjectsState = {
  projects: {} as IProjects,
  projectsLoading: false,
  projectsLoaded: false,
};
