import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

// Helpers
import { transformDate, trackItem } from '../../../helpers/helper-functions';

// Interfaces
import { IProject } from '../../../interfaces/projects.interface';

@Component({
  selector: 'techsrv-projects-view-list',
  templateUrl: './projects-view-list.component.html',
  styleUrls: ['./projects-view-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsViewListComponent {

  transformDate = transformDate;
  trackItem = trackItem;

  @Input() projects?: IProject[];
  @Output() selectedProjects = new EventEmitter();

  selectProject(id: string): void {
    this.selectedProjects.emit(id);
  }
}
