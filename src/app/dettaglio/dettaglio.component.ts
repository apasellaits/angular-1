import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../_services/api.service';
import Drink from '../_models/drink.model';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
})
export class DettaglioComponent implements OnInit {

  drink: any =  {}
  drinkSuggeriti: Drink[] = [];


  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=15200')
        .subscribe( (response: any) => {
          this.drink = response.drinks[0];
          this.drinkSuggeriti = [this.drink, this.drink, this.drink]
        })
  }
    

    salva() {
      this.http.post('URL_SALVATAGGIO', this.drink)
            .subscribe( response => {
              this.ngOnInit()
            })
    }
}
