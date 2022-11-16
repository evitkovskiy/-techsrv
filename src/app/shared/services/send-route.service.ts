import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendRouteService {

  changeRoute = new BehaviorSubject('');

}
