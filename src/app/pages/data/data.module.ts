import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { DataComponent } from './data.component';
// import { MaterialExampleModule } from 'src/global/material.module';

export const routes: Routes = [
  {
    path: '',
    canActivate: [],
    component: DataComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [DataComponent],
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    // MaterialExampleModule
  ],
})
export class DataModule {}
