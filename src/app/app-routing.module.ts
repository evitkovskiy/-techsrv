import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: 'data',
    loadChildren: () => import('./views/data-view/data-view.module').then((m) => m.DataViewModule),
  },
  {
    path: 'projects/:id',
    loadChildren: () => import('./views/projects-view/projects-view.module').then((m) => m.ProjectsViewModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/data'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
