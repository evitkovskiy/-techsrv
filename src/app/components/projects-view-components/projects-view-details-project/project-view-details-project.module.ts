import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsViewDetailsProjectComponent } from './projects-view-details-project.component';
import { MaterialExampleModule } from 'src/global/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppPipesModule } from 'src/app/helpers/pipes/app-pipes.module';
import { MomentDateModule } from '@angular/material-moment-adapter';


@NgModule({
  declarations: [ProjectsViewDetailsProjectComponent],
  entryComponents: [ProjectsViewDetailsProjectComponent],
  exports: [ProjectsViewDetailsProjectComponent],
  imports: [
    CommonModule,
    MaterialExampleModule,
    FormsModule,
    ReactiveFormsModule,
    AppPipesModule,
    MomentDateModule
  ]
})
export class ProjectsViewDetailsProjectComponentModule { }
