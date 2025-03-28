import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {

  ngOnInit(): void {
    this.fireToken();
  }

  apiMessages: string[] = [];


  fireToken() {
    this.setToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBAcHAuY29tIiwiaWF0IjoxNzQzMTYzNDc4LCJleHAiOjE3NDMyMDY2Nzh9.G4beKC2GHv_AIqBZyxq3MNqCTAmP4W-FJhrTR1gi5og');
  }

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
