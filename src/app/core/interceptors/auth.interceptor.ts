import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private router: Router, private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken = this.authService.getToken() || localStorage.getItem('token');


    // If there's no token, continue the request without modifying it
    if (!authToken) {
      return next.handle(req);
    }

    const authReq = req.clone({
      // setHeaders: header
      setHeaders: {
        Authorization: `Bearer ${authToken}`
      }
    });

    return next.handle(authReq).pipe(
      catchError((error) => {
        console.error('Interceptor caught an error:', error);
        return this.handleError(error);
      }));
  }

  // Handle errors
  private handleError(error: HttpErrorResponse): Observable<never> {
    console.log('Handling error:', error.status);
    switch (error.status) {
      case 401:
        console.error('Unauthorized! OR Token Expired!');
        this.router.navigate(['/session-expired']);
        break;
      case 403:
        console.error('Access Denied! You do not have permission.');
        this.router.navigate(['/access-denied']);
        break;
      case 404:
        console.error('Not Found! The requested resource does not exist.');
        this.router.navigate(['/not-found']);
        break;
      case 500:
        console.error('Server error! Please try again later.');
        this.router.navigate(['/server-error']);
        break;
      default:
        console.error('Error:', error.message);
    }

    return throwError(() => new Error(error.message)); // Pass the error to the component
  }


}




