import { Injectable } from '@angular/core';
import { ITEM } from '../../ITEM';
@Injectable({
  providedIn: 'root',
})
export class ListingsService {
  constructor() {}

  getAll(): ITEM[] {
    // Get All listings
    return [
      {
        id: 0,
        image: 'assets/tmp/inferentialLogo.png',
        shortDesc: 'High-quality widget',
        longDesc: 'High-quality widget',
        price: 49.99,
        seller: 'John Smith',
        category: 'school'
      },
      {
        id: 1,
        image: 'assets/tmp/inferentialLogo.png',
        shortDesc: 'High-quality widget',
        longDesc: 'High-quality widget',
        price: 35.5,
        seller: 'Jane Doe',
        category: 'clothes'
      },
      {
        id: 2,
        image: 'assets/tmp/inferentialLogo.png',
        shortDesc: 'High-quality widget',
        longDesc: 'High-quality widget',
        price: 19.99,
        seller: 'Alex Johnson',
        category: 'tech'
      },
    ];
  }

  getById(listingId: number) {
    // Get Individual listing
  }

  createListing(listing: FormData) {
    // Create listing
  }
}
