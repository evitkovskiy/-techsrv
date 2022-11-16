import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Components
import { HeaderViewComponent } from './header-view.component';

// Modules
import { MaterialExampleModule } from '../../../global/material.module';


@NgModule({
  declarations: [HeaderViewComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialExampleModule,
  ],
  exports: [HeaderViewComponent],
})
export class HeaderViewModule {}
