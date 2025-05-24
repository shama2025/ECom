import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { AuthService } from '../service/auth/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor(
    private router: Router,
    private authService: AuthService,
  ) {}

  password = '';
  email = '';

  /**
   * Attempts to confirm user credentials are accurate
   */
  login(): void {
    console.log('email:', this.email);
    console.log('password:', this.password);

    if (!this.email || !this.password) {
      // Navigate to login-form
      this.router.navigateByUrl('/login');
    }

    const formData = new FormData();

    formData.append('email', this.email);
    formData.append('password', this.password);

    console.log(formData);
    // Send to API
    this.authService.login(formData);
  }
}
