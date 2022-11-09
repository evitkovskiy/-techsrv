import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { projectsActions } from '../../store/projects/actions';
import { projectsSelectors } from '../../store/projects/selectors'
import { IProject } from 'src/app/interfaces/projects.interface';

@Component({
  selector: 'techsrv-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

  projects$!: Observable<IProject[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.select(projectsSelectors.projectsoaded);
    this.store.dispatch(projectsActions.loadProjects());
    this.projects$ = this.store.select(projectsSelectors.projects);
    console.log(this.projects$);
  }

}
