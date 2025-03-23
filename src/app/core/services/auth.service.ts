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
    token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBAcHAuY29tIiwiaWF0IjoxNzQyNzUwNzM0LCJleHAiOjE3NDI3OTM5MzR9.fS0IV0wT-LdazMqVpO4UzNynsP-Sn3q_drk_YXywPp8";

  }

  removeToken(): void {
    localStorage.removeItem('authToken'); // ✅ Clear token on logout
  }
}
