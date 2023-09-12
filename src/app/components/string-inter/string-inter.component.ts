import { Component } from '@angular/core';

@Component({
  selector: 'app-string-inter',
  templateUrl: './string-inter.component.html',
  styleUrls: ['./string-inter.component.scss'],
})
export class StringInterComponent {
  title: string;
  number1: number;
  number2: number;
  total: number;

  toggle: boolean;

  constructor() {
    this.title = 'Calculation';
    this.number1 = 1;
    this.number2 = 6;
    this.total = this.number1 + this.number2;

    this.toggle = true;
  }
}
