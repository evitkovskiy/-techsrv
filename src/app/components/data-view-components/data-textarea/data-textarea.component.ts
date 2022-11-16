import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';

// Services
import { PreloaderService } from '../../../shared/services';

// Forms
import { DataTextAreaForm } from '../../../entities/forms';

// Interfaces
import { IProjects } from '../../../interfaces/projects.interface';

@Component({
  selector: 'techsrv-data-textarea',
  templateUrl: './data-textarea.component.html',
  styleUrls: ['./data-textarea.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTextareaComponent {

  @Input() set projects(value: IProjects) {
    this._setValue(value)
  }

  @Output() loadProjects = new EventEmitter();
  @Output() saveProjects = new EventEmitter();

  dataForm!: FormGroup;

  get controls(): { [key: string]: AbstractControl } {
    return this.dataForm.controls;
  }

  constructor(private fb: FormBuilder, private preloaderService: PreloaderService) {
    this.dataForm = this.fb.group(new DataTextAreaForm());
  }

  onSaveProjects(): void {
    this.saveProjects.emit(this.dataForm.get('projectsJson')?.value);
  }

  onLoadProjects(): void {
    if (localStorage.getItem('loadData')) {
      this.dataForm.setValue({
        projectsJson: localStorage.getItem('loadData')
      })
    }
    this.loadProjects.emit();
  }

  getDataErrorMessage(): string {
    return this.controls.projectsJson.hasError('required')
      ? 'Поле не должно быть пустым'
      : this.controls.projectsJson.hasError('isJson')
      ? 'Введённая строка не является объектом JSON'
      : '';
  }

  private _setValue(value: IProjects): void {
    if (value === null) return;
    Object.keys(value).length === 0? 
        this.preloaderService.show():
        this.preloaderService.hide();
    localStorage.setItem('loadData', JSON.stringify(value));
    this.dataForm.setValue({
      projectsJson: JSON.stringify(value)
    });
  }
}
