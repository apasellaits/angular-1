import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  drinks: any = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
      .subscribe( (response: any) => {
        console.log(response);
        this.drinks = response.drinks;
      });
  }

  delete(pippo: number) {
    this.http.delete('http://www.pippo.it/fattura?id=' + pippo)
    .subscribe( response => {
      // ....
    });
  }

}
