import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginformComponent } from './login-form/loginform.component';
import { SignupformComponent } from './sign-up-form/signupform.component';
import { ItemPageComponent } from './item-page/item-page.component';
import { ItemListingFormComponent } from './item-listing-form/item-listing-form.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    LoginformComponent,
    SignupformComponent,
    ItemPageComponent,
    ItemListingFormComponent,
    LandingPageComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ecom-app';
}
