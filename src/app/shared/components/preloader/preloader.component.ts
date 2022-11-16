import { Component, Input, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PreloaderService } from '../../services/preloader.service';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.scss']
})
export class PreloaderComponent implements OnInit, OnDestroy {
  @Input() showCancelButton = true;
  isVisible?: boolean;
  isMinified?: boolean;
  private unsubscribe = new Subject();

  constructor(
    public preloaderService: PreloaderService,
    public cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.preloaderService.status
      .pipe(
        takeUntil(this.unsubscribe)
      )
      .subscribe((val: boolean) => {
        this.isVisible = val;
        this.isMinified = !val;
        this.cdr.detectChanges();
      });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  hideSpinner(): void {
    this.isMinified = true;
  }
}
