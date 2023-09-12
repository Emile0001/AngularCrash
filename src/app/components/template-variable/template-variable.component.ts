import { Component } from '@angular/core';

@Component({
  selector: 'app-template-variable',
  templateUrl: './template-variable.component.html',
  styleUrls: ['./template-variable.component.scss'],
})
export class TemplateVariableComponent {
  constructor() {}
  displayMessage(message: string) {
    alert(message);
  }
}
