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
        console.log('Interceptor caught an error:', error);
        return this.handleError(error);
      }));
  }
  errorMessages: string[] = [];

  // Handle errors
  private handleError(error: HttpErrorResponse): Observable<never> {
    console.log('Handling error:', error.status);
    switch (error.status) {
      case 400:
        console.log('Bad Request! Please check your input.');
        this.errorMessages = Object.values(error.error.errors).flat() as string[];
        this.authService.apiMessages = this.errorMessages;
        console.log('Error Messages:', this.errorMessages);
        break;
      case 401:
        console.log('Unauthorized! OR Token Expired!');
        this.router.navigate(['/session-expired']);
        break;
      case 403:
        console.log('Access Denied! You do not have permission.');
        this.router.navigate(['/access-denied']);
        break;
      case 404:
        console.log('Not Found! The requested resource does not exist.');
        this.router.navigate(['/not-found']);
        break;
      case 500:
        console.log('Server error! Please try again later.');
        this.router.navigate(['/server-error']);
        break;
      default:
        console.log('Error:', error.message);
    }

    return throwError(() => new Error(error.message)); // Pass the error to the component
  }


}




