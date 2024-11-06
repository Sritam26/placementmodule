import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PlacementService } from '../placement.service';
import { ReactiveFormsModule } from '@angular/forms'; // Ensure this is imported for formGroup

@Component({
  selector: 'app-coordinator-form',
  templateUrl: './coordinator-form.component.html',
  styleUrls: ['./coordinator-form.component.css'],
  standalone: true,  // Keep it standalone if needed
  imports: [ReactiveFormsModule] // Add this here
})
export class CoordinatorFormComponent {
  placementForm: FormGroup;

  constructor(private fb: FormBuilder, private placementService: PlacementService) {
    this.placementForm = this.fb.group({
      companyName: ['', Validators.required],
      jobRole: ['', Validators.required],
      salary: ['', Validators.required],
      location: ['', Validators.required],
      jobDescription: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.placementForm.valid) {
      // Convert salary to number
      const formData = { ...this.placementForm.value, salary: Number(this.placementForm.value.salary) };

      this.placementService.addPlacement(formData).subscribe(
        (response) => {
          console.log('Server response:', response);
          alert('Placement details submitted successfully!');
          this.placementForm.reset();
        },
        (error) => {
          console.error('Error occurred during submission:', error);
          alert('Error submitting placement details');
        }
      );
    }
  }

}
