import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap } from 'rxjs/operators';
import {of} from 'rxjs';

// ACtions
import { projectsActions } from './actions';

// Services
import { ProjectsService } from '../../services/projects.service';

@Injectable()
export class ProjectsEffects {
  constructor(
    private actions$: Actions,
    private service: ProjectsService,

  ) {
  }

  loadProjects$ = createEffect(() =>
    this.actions$.pipe(
      ofType(projectsActions.loadProjects),
      switchMap(({}) =>
        this.service.getProjects().pipe(
          map((response) =>  projectsActions.loadProjectsSuccess({payload: response})
          ),
          catchError((error) => of(projectsActions.loadProjectsFailed(error)))
        )
      )
    )
  );
}
