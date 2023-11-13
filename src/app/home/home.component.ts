import { Component, OnInit } from '@angular/core';
import { ApiService } from '../_services/api.service';
import Drink from '../_models/drink.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  drinks: Drink[] = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {}

  ricerca() {
    this.api.getElencoDrinks('a').subscribe( (response: any) => {
      this.drinks = response.drinks;
      // this.drinks = drinks;
    })
  }
}
