import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsViewListComponent } from './projects-view-list.component';

describe('ProjectsViewListComponent', () => {
  let component: ProjectsViewListComponent;
  let fixture: ComponentFixture<ProjectsViewListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsViewListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsViewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
