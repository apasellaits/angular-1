import { Component, OnInit } from '@angular/core';
import { ApiService } from './_services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  
  constructor(private apiService: ApiService
              ) {}

  ngOnInit(): void {
    this.apiService.searchByF('b')
        .subscribe( response => {
          console.log(response);
        });
  }


}
