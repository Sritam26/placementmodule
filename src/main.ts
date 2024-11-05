import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app/app.component';

// Import your routes from app.routes
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), // Set up the router with your routes
    importProvidersFrom(HttpClientModule) // Add HttpClientModule if needed for HTTP requests
  ]
}).catch(err => console.error(err));
