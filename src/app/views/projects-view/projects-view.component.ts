import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';

// Interfaces
import { IProject } from '../../interfaces/projects.interface';

// Services
import { MessageService, SendRouteService } from '../../shared/services';

// Classes
import { Watcher } from '../../classes/watcher';

@Component({
  selector: 'techsrv-projects-view',
  templateUrl: './projects-view.component.html',
  styleUrls: ['./projects-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsViewComponent extends Watcher implements OnInit, OnDestroy {

  projects?: IProject[];
  selectProject?: IProject;
  constructor(
    private activatedRout: ActivatedRoute,
    private messageService: MessageService,
    private sendRouteService: SendRouteService) {
    super();
   }

  ngOnInit(): void {
    this.updateData();
  }

  selectedProjects(id: string): void {
    this.sendRouteService.changeRoute.next(id);
    this.selectProject = this.projects?.find((item: IProject) => item.id === id);
  }

  updateProjects(): void {
    this.updateData();
    this.messageService.snackBarOpen('Проект изменён');
  }

  private updateData(): void {
    this.projects = JSON.parse(localStorage.getItem('dataProjects') as string)?.Projects;
    this.activatedRout.params
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(param => {
      this.selectProject = this.projects?.find((item: IProject) => item.id === param.id);
      this.sendRouteService.changeRoute.next(param.id);
    });
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }

}
