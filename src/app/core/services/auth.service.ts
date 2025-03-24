import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  getToken(): string | null {
    return localStorage.getItem('authToken'); // ✅ Retrieve token from local storage
  }

  setToken(token: string): void {
    localStorage.setItem('authToken', token); // ✅ Save token after login

  }

  removeToken(): void {
    localStorage.removeItem('authToken'); // ✅ Clear token on logout
  }
}
