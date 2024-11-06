import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface LoginRequest {
  userId: string;
  password: string;
}

export interface SignupRequest {
  name: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  login(request: LoginRequest): Observable<any> {
    return this.http.post(`${this.apiUrl}/loginUser`, request);
  }

  signup(request: SignupRequest): Observable<any> {
    return this.http.post(`${this.apiUrl}/addUser`, request);
  }


  private coordinatorapiurl='http://localhost:8080/api/coordinators';
  loginCoordinator(request: LoginRequest): Observable<any> {
    return this.http.post(`${this.coordinatorapiurl}/login`, request);
  }

  signupCoordinator(request: SignupRequest): Observable<any> {
    return this.http.post(`${this.coordinatorapiurl}/signup`, request);
  }
}
