import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlacementService {
  private apiUrl = 'http://localhost:8080/api'; // Spring Boot API URL

  constructor(private http: HttpClient) {}

  // Method to add placement
  addPlacement(placementData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/add-placement`, placementData);
  }

  // Method to get placement details
  getPlacements(): Observable<any> {
    return this.http.get(`${this.apiUrl}/placement-details`);
  }
}
