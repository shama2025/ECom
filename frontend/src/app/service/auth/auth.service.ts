import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  login(credentials: FormData) {
    // Get Login information to API
  }

  signup(credentials: FormData) {
    // Add user to Users Database
  }

  logout() {
    // Remove token from localhost
  }

  isLoggedIn(): boolean {
    // Check if user is logged in
    return true;
  }

  getToken(): string | null {
    // Get Token from localstorage
    return null;
  }
}
