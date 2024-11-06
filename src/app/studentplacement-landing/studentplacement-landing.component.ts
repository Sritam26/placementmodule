import { Component, OnInit } from '@angular/core';
import { PlacementService } from '../placement.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';  // Make sure HttpClientModule is imported here
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  // Import the necessary forms module

@Component({
  selector: 'app-studentplacement-landing',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],  // Add the required modules
  templateUrl: './studentplacement-landing.component.html',
  styleUrls: ['./studentplacement-landing.component.css']
})
export class StudentplacementLandingComponent implements OnInit {
  placements: any[] = [];  // Array to hold the placement data

  constructor(private placementService: PlacementService) { }

  ngOnInit(): void {
    // Fetch placements when the component is initialized
    this.placementService.getPlacements().subscribe(
      (data: any[]) => {
        this.placements = data;  // Populate placements with fetched data
      },
      (error) => {
        alert('Failed to load placement details');  // Error handling
      }
    );
  }
}
