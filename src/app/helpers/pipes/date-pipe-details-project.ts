import { Pipe, PipeTransform } from '@angular/core';
import { formatDate } from '../helper-functions';

@Pipe({
    name: 'transformDate',
    // pure: true
})
export class TransformDatePipe implements PipeTransform {
  transform(value: string): string {
    return formatDate(new Date(value));
  }
}
