import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Drink from '../_models/drink.model';

@Component({
  selector: 'app-drink-card',
  templateUrl: './drink-card.component.html',
})
export class DrinkCardComponent implements OnInit {
  @Input() drink!: Drink;
  @Input() dimensione: string = 'media';
  @Output() onDelete = new EventEmitter();


  constructor() {}

  ngOnInit(): void {
    if(!this.drink) {
      alert('Errore! non hai passato un drink');
    }
  }

  elimina() {
    this.onDelete.next(this.drink);
  }

}
