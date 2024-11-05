import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

interface User {
  name: string;
  email: string;
  password: string;
  re_password: string;
  agree: boolean;
}

@Component({
  selector: 'app-studentregistration',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './studentregistration.component.html',
  styleUrls: ['./studentregistration.component.css']
})
export class StudentregistrationComponent {
  user: User = {
    name: '',
    email: '',
    password: '',
    re_password: '',
    agree: false
  };

  constructor(private http: HttpClient) {}

  onSubmit() {
    if (this.user.password !== this.user.re_password) {
      alert("Passwords do not match");
      return;
    }

    // Send user data to the backend at the correct URL
    this.http.post('http://localhost:8080/addUser', this.user).subscribe(
      response => {
        console.log('User registered successfully:', response);
        alert("Registration successful");
      },
      error => {
        console.error('Registration error:', error);
        alert("Registration failed: " + error.message); // Show the error message for debugging
      }
    );
  }
}
