import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
 providedIn: 'root',
})
export class ApiService {
    constructor(private http: HttpClient) {}

    searchByF(firstLetter: string) {
        return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=' 
                        + firstLetter);

    }
}