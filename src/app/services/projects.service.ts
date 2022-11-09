import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IProject } from '../interfaces/projects.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

   mock = 
    [{
      id: 1,
      subject: 'Проект 1',
      description: 'Проект интернет-платформы для рынка лизинга',
      createdBy: 'Александр Иванов',
      startDate: '2021-09-24T09:00:00',
      endDate: '2021-10-24T09:00:00',
      cost: 120000.5
    }];

  constructor(
    private http: HttpClient
  ) { }

  getProjects(): Observable<any> {
    return of(this.mock)
    // return this.http.get<IProject[]>('');
  }
}
