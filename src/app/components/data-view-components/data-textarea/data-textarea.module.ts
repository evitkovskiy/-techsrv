import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTextareaComponent } from './data-textarea.component';
import { MaterialExampleModule } from 'src/global/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [DataTextareaComponent],
  entryComponents: [DataTextareaComponent],
  exports: [DataTextareaComponent],
  imports: [
    CommonModule,
    MaterialExampleModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DataTextAreaModule { }
