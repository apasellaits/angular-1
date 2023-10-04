import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  datiAnagrafici = true;
  nome = '';
  altro = '';
  percorsoStudi = false;
  esperienzeLavorative = false;

  constructor() {}

  ngOnInit(): void {
   
  }

  // toggleSezione(nomeSezione: string) {
  //   this.datiAnagrafici = false;
  //   this.percorsoStudi = false;
  //   this.esperienzeLavorative = false;

  //   if(nomeSezione === 'datiAnagrafici') {
  //     this.datiAnagrafici = true;
  //   } else  if(nomeSezione === 'percorsoStudi') {
  //     this.percorsoStudi = true;
  //   } else if(nomeSezione === 'esperienzaLavorative') {
  //     this.esperienzeLavorative = true;
  //   }
  // }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/