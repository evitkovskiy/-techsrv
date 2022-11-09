import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ProjectsComponent } from './projects.component';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    canActivate: [],
    component: ProjectsComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [ProjectsComponent],
  imports: [
    RouterModule.forChild(routes),
  ],
})
export class ProjectsModule {}
