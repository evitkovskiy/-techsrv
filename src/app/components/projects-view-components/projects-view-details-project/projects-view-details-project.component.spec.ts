import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsViewDetailsProjectComponent } from './projects-view-details-project.component';

describe('ProjectsViewDetailsProjectComponent', () => {
  let component: ProjectsViewDetailsProjectComponent;
  let fixture: ComponentFixture<ProjectsViewDetailsProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsViewDetailsProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsViewDetailsProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
