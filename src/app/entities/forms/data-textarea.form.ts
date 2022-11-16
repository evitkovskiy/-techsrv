import { AbstractControl, ValidationErrors } from '@angular/forms';
import { projectsJsonValidators } from '../../shared/validators/data-validator';


export class DataTextAreaForm {
  projectsJson: (string | ((control: AbstractControl) => ValidationErrors)[])[];

  constructor() {
    this.projectsJson = ['', projectsJsonValidators as (string | ((control: AbstractControl) => ValidationErrors)[])]
    }
}
