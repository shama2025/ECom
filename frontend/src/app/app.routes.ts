import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginformComponent } from './login-form/loginform.component';
import { SignupformComponent } from './sign-up-form/signupform.component';
import { ItemListingFormComponent } from './item-listing-form/item-listing-form.component';

export const routes: Routes = [
  { path: 'home', component: LandingPageComponent },
  { path: 'login', component: LoginformComponent },
  { path: 'signup', component: SignupformComponent },
  { path: 'listing', component: ItemListingFormComponent },
  { path: '**', component: LandingPageComponent },
];
