import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(
    private snackBar: MatSnackBar,
  ) { }

  snackBarOpen(message: string): void {
    this.snackBar.open(message, 'Close'), {
      duration: 1000,
      verticalPosition: 'top',
      panelClass: ['snackbar-dark']
    };
  }

  snackBarClose(): void {
    this.snackBar.dismiss();
  }
}
