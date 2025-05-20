import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  /**
   * Attempts to confirm user credentials are accurate
   */
  login(): void {
    const email = document.getElementById('emailInput') as HTMLInputElement;
    const password = document.getElementById(
      'passwordInput',
    ) as HTMLInputElement;

    if (email.value == null && password.value == null) {
      // Navigate to login-form
    }

    const formData = new FormData();

    formData.append('email', email.value);
    formData.append('password', password.value);

    console.log(formData);
    // Send to API
  }
}
