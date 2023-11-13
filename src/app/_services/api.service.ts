import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import Drink from '../_models/drink.model';

@Injectable({
 providedIn: 'root',
})
export class ApiService {
    constructor( private http: HttpClient) {}
    getElencoDrinks(letter: string) {
        return this.http
            .get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=' + letter)
            
    }

    getDettaglioDrink(idDrink: string) {
        return this.http
            .get('http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + idDrink)
    }
}