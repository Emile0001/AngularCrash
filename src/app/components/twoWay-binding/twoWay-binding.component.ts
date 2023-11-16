import { Component } from '@angular/core';

@Component({
  selector: 'app-twoWay-binding',
  templateUrl: './twoWay-binding.component.html',
})
export class TwoWayBindingComponent {
  someText: string;

  constructor() {
    this.someText = '';
  }
}
