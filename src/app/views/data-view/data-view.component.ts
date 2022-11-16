import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

// NgRx
import { Store } from '@ngrx/store';
import { projectsActions } from '../../store/projects/actions';
import { projectsSelectors } from '../../store/projects/selectors'

// Interfaces
import { IProjects } from '../../interfaces/projects.interface';

@Component({
  selector: 'techsrv-data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataComponent {
  
  projects$!: Observable<IProjects>;

  constructor(
    private store: Store, 
    private router: Router, 
  ) {}

  loadProjects(): void {
      this.store.select(projectsSelectors.projectsoaded);
      this.store.dispatch(projectsActions.loadProjects());
      this.projects$ = this.store.select(projectsSelectors.projects);
  }

  saveProjects(emitSave: string): void {
    localStorage.setItem('dataProjects', emitSave);
    this.router.navigate(['/projects', 1]);
  }

}
