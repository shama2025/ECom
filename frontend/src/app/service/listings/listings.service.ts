import { Injectable } from '@angular/core';
import { BASE_URL } from '../../../assets/env';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ListingsService {
  httpClient: HttpClient
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient
  }

  getAll(): Observable<Object>{
    // Get All listings
    return this.httpClient.get(`${BASE_URL}/item`)
  }

  getById(listingId: number): Observable<Object>{
    // Get Individual listing
   const headers = new HttpHeaders ({
       'Content-Type': 'application/json',
      'X-Custom-Header': 'Get-Item-By-Id',
  })
  return this.httpClient.get(`${BASE_URL}/item/${listingId}`)
  }

  createListing(listing: FormData): Observable<any> {
    // Create listing
       const headers = new HttpHeaders ({
           'Content-Type': 'application/json',
          'X-Custom-Header': 'my-specific-value',
      })
      const body = {
            'imageUrl':listing.get('images'),
            'long_descritption':listing.get('desc'),
            'short_description': listing.get('name'),
            'price': 0,
            'seller': '',
            'category': ''
      }
      return this.httpClient.post(`${BASE_URL}\item`,body,{headers: headers})
  }
}
