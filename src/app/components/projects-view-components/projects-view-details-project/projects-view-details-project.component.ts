import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';

// Angular Material
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

// Classes
import { Watcher } from '../../../classes/watcher';

// Forms
import { ProjectDetailsForm } from 'src/app/entities/forms';

// Interfaces
import { IProject } from '../../../interfaces/projects.interface';

// Constanst
import { MY_DATE_FORMATS } from '../../../../global/constants';

// Lodash
import * as _ from 'lodash';

@Component({
  selector: 'techsrv-projects-view-details-project',
  templateUrl: './projects-view-details-project.component.html',
  styleUrls: ['./projects-view-details-project.component.scss'],

  // Провайдеры можно вынести в модуль, но я решил оставить в компоненте для наглядности.
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]},
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsViewDetailsProjectComponent extends Watcher implements OnInit, OnChanges, OnDestroy {

  @Input() selectProject?: IProject;
  @Input() projects?: IProject[];

  @Output() updateProjects = new EventEmitter();

  projectForm!: FormGroup;
  newObj?: IProject[];
  showEdit = false;
  saveEditProject = true;
  isRangeDateCorrect = true;

  get controls(): { [key: string]: AbstractControl } {
    return this.projectForm.controls;
  }

  constructor(private fb: FormBuilder,) {
    super();
    this.projectForm = this.fb.group(new ProjectDetailsForm());
   }

   ngOnInit(): void {
     this.projectForm.valueChanges
     .pipe(takeUntil(this.unsubscribe))
     .subscribe(value => {
      //JSON.stringify() method, неудобно, если ключи расположены не в том же порядке, но в данном случае подходит.
      this.saveEditProject = JSON.stringify(value) === JSON.stringify(this.selectProject) ? true : false;

      //Lodash method
      //this.saveEditProject = _.isEqual(value, this.selectProject);

      this.isRangeDateCorrect = this.isRangeDate(value.startDate, value.endDate);
     });
   }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes) return;
    this.projectForm.patchValue(this.selectProject || {});
    this.showEdit = false;
  }

  editProject(): void {
    this.newObj = this.projects?.map((project: IProject) => 
      project.id === this.projectForm.getRawValue().id ? project = this.projectForm.getRawValue() : project);
    localStorage.clear();
    localStorage.setItem('dataProjects', JSON.stringify({Projects: this.newObj}));
    this.saveEditProject = true;
    this.updateProjects.emit();
    this.showEdit = !this.showEdit;
  }


  getSubjectErrorMessage(): string {
    return this.controls.subject.hasError('required')
      ? 'Поле не должно быть пустым'
      : this.controls.subject.hasError('minlength')
      ? 'Название проекта должно содержать более 5 символов'
      : this.controls.subject.hasError('maxlength')
      ? 'Название проекта должно содержать менее 20 символов'
      : this.controls.subject.hasError('pattern')
      ? 'Название проекта должно содержать только буквы и цифры'
      : '';
  }

  getStartDateErrorMessage(): string {
    return this.controls.startDate.hasError('required')
      ? 'Поле не должно быть пустым'
      : this.controls.startDate.hasError('isCorrectDate')
      ? 'Введите корректный формат даты ДД.ММ.ГГГГ'
      : '';
  }

  getEndDateErrorMessage(): string {
    return this.controls.endtDate.hasError('required')
      ? 'Поле не должно быть пустым'
      : this.controls.endDate.hasError('isCorrectDate')
      ? 'Введите корректный формат даты ДД.ММ.ГГГГ'
      : '';
  }

  getCreatedByErrorMessage(): string {
    return this.controls.createdBy.hasError('required')
      ? 'Поле не должно быть пустым'
      : this.controls.createdBy.hasError('minlength')
      ? 'Имя должно содержать более 5 символов'
      : this.controls.createdBy.hasError('maxlength')
      ? 'Имя должно содержать менее 20 символов'
      : this.controls.createdBy.hasError('pattern')
      ? 'Имя должно содержать только буквы'
      : '';
  }

  getDescriptionErrorMessage(): string {
    return this.controls.description.hasError('required')
      ? 'Поле не должно быть пустым'
      : this.controls.description.hasError('minlength')
      ? 'Описание должно содержать более 5 символов'
      : this.controls.description.hasError('maxlength')
      ? 'Описание должно содержать менее 50 символов'
      : '';
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  private isRangeDate(startDate: string, endDate: string): boolean {
    return new Date(startDate) < new Date(endDate);
  }
}
