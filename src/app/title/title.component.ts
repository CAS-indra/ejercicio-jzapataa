import { Component } from '@angular/core';

@Component({
  selector: 'app-title',
  template: `<h1>{{ title }} funciona!</h1>`,
  styleUrls: ['./title.component.css'],
})
export class TitleComponent {
  public title = 'Ejercicio 1';
}
