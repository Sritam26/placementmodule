import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService, SignupRequest } from '../auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-coordinator-signup',
  standalone: true,
  templateUrl: './coordinator-signup.component.html',
  styleUrls: ['./coordinator-signup.component.css'],
  imports: [ReactiveFormsModule, CommonModule]
})
export class CoordinatorSignupComponent {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      const signupRequest: SignupRequest = this.signupForm.value;
      this.authService.signupCoordinator(signupRequest).subscribe(
        response => {
          if (response) {
            console.log('Signup successful');
            this.router.navigate(['/coordinator-login']); // Redirect to login page
          } else {
            console.error('Signup failed');
          }
        },
        error => {
          console.error('Signup failed', error);
        }
      );
    }
  }
}
