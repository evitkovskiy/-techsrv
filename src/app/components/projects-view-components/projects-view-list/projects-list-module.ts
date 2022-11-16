import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsViewListComponent } from './projects-view-list.component';
import { MaterialExampleModule } from 'src/global/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [ProjectsViewListComponent],
  entryComponents: [ProjectsViewListComponent],
  exports: [ProjectsViewListComponent],
  imports: [
    CommonModule,
    MaterialExampleModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class ProjectsViewListComponentModule { }
