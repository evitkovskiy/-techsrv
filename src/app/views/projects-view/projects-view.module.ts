import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Modules
import {
  ProjectsViewDetailsProjectComponentModule,
  ProjectsViewListComponentModule
} from '../../components/projects-view-components';

// Components
import { ProjectsViewComponent } from './projects-view.component';

// Material Module
import { MaterialExampleModule } from '../../../global/material.module';

export const routes: Routes = [
  {
    path: '',
    canActivate: [],
    component: ProjectsViewComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [ProjectsViewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ProjectsViewDetailsProjectComponentModule,
    ProjectsViewListComponentModule,
    MaterialExampleModule
  ],
})
export class ProjectsViewModule {}
