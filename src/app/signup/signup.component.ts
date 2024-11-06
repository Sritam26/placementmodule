import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService, SignupRequest } from '../auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-signup',
  standalone: true,
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  imports: [ReactiveFormsModule, CommonModule] // Add CommonModule here
})
export class SignupComponent {
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
      this.authService.signup(signupRequest).subscribe(response => {
        if (response) {
          console.log('Signup successful');
          this.router.navigate(['/login']); // Redirect to login page
        } else {
          console.error('Signup failed');
        }
      }, error => {
        console.error('Signup failed', error);
      });
    }
  }
}
