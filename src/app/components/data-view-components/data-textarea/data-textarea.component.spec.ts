import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTextareaComponent } from './data-textarea.component';

describe('DataTextareaComponent', () => {
  let component: DataTextareaComponent;
  let fixture: ComponentFixture<DataTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataTextareaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
