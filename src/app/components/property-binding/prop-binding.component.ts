import { Component } from '@angular/core';

@Component({
  selector: 'app-prop-binding',
  templateUrl: './prop-binding.component.html',
})
export class PropBindingComponent {
  title: string;
  imgScr: string;

  constructor() {
    this.title = 'Learning the fundamentals';
    this.imgScr = 'https://cdn.worldvectorlogo.com/logos/angular-3.svg';
  }
}
