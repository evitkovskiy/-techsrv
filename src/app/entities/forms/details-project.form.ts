import { AbstractControl, ValidationErrors } from '@angular/forms';

import {
  subjectValidators,
  descriptionValidators,
  createdByValidators,
  startDateValidators,
  endDateValidators
} from '../../shared/validators/data-validator';

export class ProjectDetailsForm {
  id: (string | ((control: AbstractControl) => ValidationErrors)[])[];
  subject: (string | ((control: AbstractControl) => ValidationErrors)[])[];
  description: (string | ((control: AbstractControl) => ValidationErrors)[])[];
  createdBy: (string | ((control: AbstractControl) => ValidationErrors)[])[];
  startDate: (string | ((control: AbstractControl) => ValidationErrors)[])[];
  endDate: (string | ((control: AbstractControl) => ValidationErrors)[])[];
  cost: (number | ((control: AbstractControl) => ValidationErrors)[])[];


  constructor() {
    this.id = [''];
    this.subject = ['', subjectValidators as ((control: AbstractControl) => ValidationErrors)[]];
    this.description = ['', descriptionValidators as ((control: AbstractControl) => ValidationErrors)[]];
    this.createdBy = ['', createdByValidators as ((control: AbstractControl) => ValidationErrors)[]];
    this.startDate = ['', startDateValidators as ((control: AbstractControl) => ValidationErrors)[]];
    this.endDate = ['', endDateValidators as ((control: AbstractControl) => ValidationErrors)[]];
    this.cost = [0];

  }
}
