import { Component } from '@angular/core';
import { ITEM } from '../ITEM';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ListingsService } from '../service/listings/listings.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-item-page',
  standalone: true,
  imports: [NgFor, CommonModule, RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.css'],
})
export class ItemPageComponent {
  items: ITEM[] = [];
  filteredItems: ITEM[] = [];
  showFilters = false;
  category = '';
  price = '';

  constructor(private listingService: ListingsService) {}

  ngOnInit(): void {
    this.loadListings();
  }

  loadListings() {
    this.items = this.listingService.getAll();
    this.filteredItems = [...this.items];
    console.log('Items: ', this.items);
  }

  getListing(id: number) {
    this.listingService.getById(id);
  }

  toggleFilters() {
    this.showFilters = !this.showFilters;
  }

  getPriceSort(event: any) {
    this.price = event.target.value;
    this.applyFilter();
  }

  getCategorySort(event: any) {
    this.category = event.target.value;
    this.applyFilter();
  }

  applyFilter() {
    let results = [...this.items];

    if (this.category) {
      results = results.filter(item => item.category === this.category);
    }

    if (this.price === 'asc') {
      results.sort((a, b) => a.price - b.price);
    } else if (this.price === 'dsc') {
      results.sort((a, b) => b.price - a.price);
    }

    this.filteredItems = results;
    console.log('Filtered Items: ', this.filteredItems);
  }
}
