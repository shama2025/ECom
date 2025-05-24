import { Component } from '@angular/core';
import { ITEM } from '../ITEM';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ListingsService } from '../service/listings/listings.service';
@Component({
  selector: 'app-item-page',
  standalone: true,
  imports: [NgFor, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './item-page.component.html',
  styleUrl: './item-page.component.css',
})
export class ItemPageComponent {
  ngOnInit(): void {
    this.loadListings();
  }

  constructor(private listingService: ListingsService) {}
  items: ITEM[] = []; // Will need chenged when API is implemented

  loadListings() {
    this.items = this.listingService.getAll();
    console.log('Items: ', this.items);
  }

  getListing(id: number) {
    this.listingService.getById(id);
  }
}
