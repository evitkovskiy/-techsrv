import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, mergeMap, switchMap, tap, withLatestFrom} from 'rxjs/operators';
import { projectsActions } from './actions';
import {of} from 'rxjs';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';
import { ProjectsService } from 'src/app/services/projects.service';

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
      switchMap(() =>
        this.service.getProjects().pipe(
          map((response) => projectsActions.loadProjectsSuccess({payload: response})),
          catchError((error) => of(projectsActions.loadProjectsFailed(error)))
        )
      )
    )
  );
}
