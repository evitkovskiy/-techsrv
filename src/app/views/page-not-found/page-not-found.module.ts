import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//Material Module
import { MaterialExampleModule } from '../../../global/material.module';

//Components
import { PageNotFoundComponent } from './page-not-found.component';


@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
    CommonModule,
    MaterialExampleModule,
    RouterModule
  ],
  exports: [PageNotFoundComponent]
})
export class PageNotFoundModule {}
