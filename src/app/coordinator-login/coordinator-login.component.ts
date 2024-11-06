import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, LoginRequest } from '../auth.service';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-coordinator-login',
  standalone: true,
  templateUrl: './coordinator-login.component.html',
  styleUrls: ['./coordinator-login.component.css'],
  imports: [ReactiveFormsModule, CommonModule] // Ensure ReactiveFormsModule is imported
})
export class CoordinatorLoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      userId: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const loginRequest: LoginRequest = this.loginForm.value;
      this.authService.loginCoordinator(loginRequest).subscribe(response => {
        if (response) {
          console.log('Login successful');
          this.router.navigate(['/']); // Redirect to home or dashboard
        } else {
          console.error('Login failed');
        }
      }, error => {
        console.error('Login failed', error); // Log error details for debugging
      });
    }
  }

}
