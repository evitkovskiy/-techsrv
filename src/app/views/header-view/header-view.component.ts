import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';

// Classes
import { Watcher } from '../../classes/watcher';

// Services
import { SendRouteService } from '../../shared/services';

@Component({
  selector: 'techsrv-header-view',
  templateUrl: './header-view.component.html',
  styleUrls: ['./header-view.component.scss']
})
export class HeaderViewComponent extends Watcher implements OnInit {

  routeStatusId = '1';

  constructor(private router: Router, private sendRouteService: SendRouteService) {
    super();
  }

  ngOnInit(): void {
    this.sendRouteService.changeRoute
    .pipe(takeUntil(this.unsubscribe))
    .subscribe((id: string) => {
      if(!id) return;
      this.routeStatusId = id;
      this.router.navigate(['/projects', this.routeStatusId])
    });
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
