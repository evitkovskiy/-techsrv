import { IProject } from 'src/app/interfaces/projects.interface';

export interface ProjectsState {
  projects: IProject[];
  projectsLoading: boolean;
  projectsLoaded: boolean;
}

export const initialState: ProjectsState = {
  projects: [],
  projectsLoading: false,
  projectsLoaded: false,
};
