import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ItemPageComponent } from '../item-page/item-page.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NavbarComponent, ItemPageComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {}
