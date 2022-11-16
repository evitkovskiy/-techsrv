import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreloaderService {
  currentStatus = false;
  status: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.currentStatus);
  private stateList: { [key: string]: boolean } = {};

  show(token: string | string[] = 'loader'): void {
    if (typeof token === 'string') {
      this.stateList[token] = true;
    } else {
      token.forEach((item) => {
        this.stateList[item] = true;
      });
    }
    this.update();
  }

  hide(token: string | string[] = 'loader'): void {
    if (typeof token === 'string') {
      this.stateList[token] = false;
    } else {
      token.forEach((item) => {
        this.stateList[item] = false;
      });
    }
    this.update();
  }

  private update() {
    const checkedStatus = this.checkStatus();
    if (this.currentStatus !== checkedStatus) {
      this.setStatus(checkedStatus);
    }
  }

  private checkStatus(): boolean {
    let updStatus = false;
    for (const key in this.stateList) {
      if (this.stateList[key] === true) {
        updStatus = true;
      }
    }
    return updStatus;
  }

  private setStatus(state: boolean) {
    this.currentStatus = state;
    this.status.next(state);
  }
}
