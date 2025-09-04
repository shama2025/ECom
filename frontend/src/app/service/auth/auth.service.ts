import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from '../../../assets/env';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  httpService: HttpClient
  constructor(httpService:HttpClient) {
    this.httpService = httpService
  }

  login(credentials: FormData): Observable<any>{
    // Get Login information to API
    const headers = new HttpHeaders ({
       'Content-Type': 'application/json',
      'X-Custom-Header': 'my-specific-value',
  })
  const body = {
        'email': credentials.get('email'),
        'password': credentials.get('password')
  }
    return this.httpService.post(`${BASE_URL}/accounts/login`,body,{headers: headers})
  }

  signup(credentials: FormData):Observable<any> {
    // Add user to Users Database
    const headers = new HttpHeaders({
    'Content-Type': 'application/json',
      'X-Custom-Header': 'Register-User',
    })
     const body = {
      'first_name': credentials.get('firstName'),
      'last_name': credentials.get('lastName'),
      'phone_number': credentials.get('phoneNumber'),
      'email': credentials.get('email'),
      'password': credentials.get('password')
 
     }
     return this.httpService.post(`${BASE_URL}//accounts/register`,body,{headers:headers})
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
