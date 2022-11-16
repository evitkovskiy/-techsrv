import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Modules
import { MaterialExampleModule } from '../../../global/material.module';

// Components
import { DataComponent } from './data-view.component';
import { DataTextAreaModule } from 'src/app/components/data-view-components/data-textarea/data-textarea.module';

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
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MaterialExampleModule,
    DataTextAreaModule
  ],
})
export class DataViewModule {}
