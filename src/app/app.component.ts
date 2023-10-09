import { Component, OnInit } from '@angular/core';

interface Cliente {
  nome: string,
  cognome: string,
  altezza?: number,
  email: string,
  sesso: 'M' | 'F' | '',
  dataNascita: any
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  jsonIn: Cliente = {
    nome: '',
    cognome: '',
    email: '',
    sesso: '',
    dataNascita: '',
  };

  constructor() {}

  ngOnInit(): void {
  }

  onDataNascitaChange($event: any) {
    console.log($event.target.value);
  }

  save() {
    // passo il jsonIn al backend
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/