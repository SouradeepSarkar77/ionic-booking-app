import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

import { PlacesService } from '../places.service';
import { Place } from '../place.model';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  offers!: Place[];

  constructor(private placesService: PlacesService, private menuCtrl: MenuController) { }

  ngOnInit() {
    this.offers = this.placesService.places;
  }

  onOpenMenu() {
    this.menuCtrl.toggle();
  }
}
