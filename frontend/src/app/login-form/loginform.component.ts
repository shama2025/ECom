import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '../service/auth/auth.service';

@Component({
  selector: 'app-loginform',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './loginform.component.html',
  styleUrl: './loginform.component.css',
})
export class LoginformComponent {
  constructor(private authService: AuthService) {}

  /**
   * Attempts to confirm user credentials are accurate
   */
  login(): void {
    const email = document.getElementById('emailInput') as HTMLInputElement;
    const password = document.getElementById(
      'passwordInput',
    ) as HTMLInputElement;
    const formData = new FormData();

    formData.append('email', email.value);
    formData.append('password', password.value);

    console.log(formData);
    // Send to API
    this.authService.login(formData);
  }
}
