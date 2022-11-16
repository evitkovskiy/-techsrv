import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';

// Interfaces
import { IProjects } from '../interfaces/projects.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

   mock = {
    "Projects": [{
      "id": "1",
      "subject": "Проект 1",
      "description": "Проект интернет-платформы для рынка лизинга",
      "createdBy": "Александр Иванов",
      "startDate": "2021-09-24T09:00:00",
      "endDate": "2021-10-24T09:00:00",
      "cost": 120000.5
    }, {
      "id": "2",
      "subject": "Проект 2",
      "description": "Бизнес-мессенджер",
      "createdBy": "Марина Ионова",
      "startDate": "2021-10-01T09:00:00",
      "endDate": "2021-11-14T09:00:00",
      "cost": 720400
    }, {
      "id": "3",
      "subject": "Проект 3",
      "description": "Проект VR-планетария",
      "createdBy": "Андрей Линев",
      "startDate": "2022-02-05T09:00:00",
      "endDate": "2022-02-25T09:00:00",
      "cost": 80300.25
    }]
  };

  constructor(
    private http: HttpClient
  ) { }

  getProjects(): Observable<IProjects> {
    return of(this.mock).pipe(delay(2000));
  }
}
