import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'data',
    loadChildren: () => import('./pages/data/data.module').then((m) => m.DataModule),
  },
  {
    path: 'projects',
    loadChildren: () => import('./pages/projects/projects.module').then((m) => m.ProjectsModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/data',
  },
  // {
  //   path: '**',
  //   component: PageNotFoundComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
