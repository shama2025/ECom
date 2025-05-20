import { Component } from '@angular/core';
import { ITEM } from '../ITEM';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-item-page',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './item-page.component.html',
  styleUrl: './item-page.component.css',
})
export class ItemPageComponent {
  items: ITEM[] = [
    {
      image: 'assets/tmp/inferentialLogo.png',
      shortDesc: 'High-quality widget',
      longDesc: 'High-quality widget',
      price: 49.99,
      seller: 'John Smith',
    },
    {
      image: 'assets/tmp/inferentialLogo.png',
      shortDesc: 'High-quality widget',
      longDesc: 'High-quality widget',
      price: 35.5,
      seller: 'Jane Doe',
    },
    {
      image: 'assets/tmp/inferentialLogo.png',
      shortDesc: 'High-quality widget',
      longDesc: 'High-quality widget',
      price: 19.99,
      seller: 'Alex Johnson',
    },
  ];
}
