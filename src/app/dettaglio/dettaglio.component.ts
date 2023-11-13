import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../_services/api.service';
import Drink from '../_models/drink.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
})
export class DettaglioComponent implements OnInit {

  drink!: any;
  drinkSuggeriti: Drink[] = [];


  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(
      ({dettaglioDrink}) => {
          this.drink = dettaglioDrink;
      });
  }
    

  salva() {
      this.http.post('URL_SALVATAGGIO', this.drink)
            .subscribe( response => {
              this.ngOnInit()
            })
    }
}
