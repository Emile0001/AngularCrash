import { Component } from '@angular/core';

@Component({
  selector: 'app-twoWay-binding',
  templateUrl: './twoWay-binding.component.html',
})
export class TwoWayBindingComponent {
  name: string;

  constructor() {
    this.name = 'please enter name:';
  }
}
