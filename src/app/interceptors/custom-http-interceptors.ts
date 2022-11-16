import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, of, throwError, TimeoutError } from 'rxjs';
import { catchError, flatMap, retryWhen, timeout } from 'rxjs/operators';

// Services
import { MessageService } from '../shared/services/message.service';

export const TIMEOUT = 30000;
export const UPLOAD_TIMEOUT = 600000;

@Injectable({
    providedIn: 'root'
})
export class RequestInterceptorService implements HttpInterceptor {

    constructor(private messageService: MessageService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const reqTimeout = req.reportProgress ? UPLOAD_TIMEOUT : TIMEOUT;
            const modReq = req.clone();
            return next.handle(modReq).pipe(
                timeout(reqTimeout),
                retryWhen(error => this.handleRetries(error)),
                catchError(err => {
                    if (err instanceof HttpErrorResponse) {
                        if (err.status === 401) {
                          // logout
                          this.handleErrorMessage(err);
                        } else if (err.status === 404) {
                          // Route to page 404
                          // this.router.navigate(['404']);
                        } else {
                          this.handleErrorMessage(err);
                        }
                      }
                    return throwError(err);
                  })
            );
        return next.handle(req);
    }

    // Write interface
    handleErrorMessage(err: any): void {
        if (err.error) {
          err.error.message ? 
          this.messageService.snackBarOpen(err.error.message) : 
          this.messageService.snackBarOpen(err.message);
        }
    }

    // Write Interface
    handleRetries(observable: Observable<any>): Observable<any> {
        return observable.pipe(flatMap((response) => {
          if (response instanceof TimeoutError) {
            return of(observable);
          }
          return throwError(response);
        }));
      }
}