import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransformDatePipe } from './date-pipe-details-project';

@NgModule({
  declarations: [TransformDatePipe],
  imports: [CommonModule],
  exports: [TransformDatePipe],
})
export class AppPipesModule {}
