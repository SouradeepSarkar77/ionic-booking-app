import { Injectable } from '@angular/core';

import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'Manhattan Mansion',
      'In the heart of New York city.',
      'assets/img/new-york.webp',
      1499.99
    ),
    new Place(
      'p2',
      'Lamour Toujours',
      'A romantic place in Paris.',
      'assets/img/lamour-toujours.webp',
      1899.99
    ),
    new Place(
      'p3',
      'The Foggy Palace',
      'Not your average city trip!',
      'assets/img/foggy-palace.webp',
      999.99
    )
  ];

  get places () {
    return [...this._places];
  }

  constructor() { }

  getPlaces(id: String) {
    return {...this._places.find(p => p.id === id)};
  }
}
