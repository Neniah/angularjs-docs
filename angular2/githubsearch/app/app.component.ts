import { Component } from '@angular/core';
import { ProfileComponent } from './components/profile.component';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>`,
  directives: [ProfileComponent]
})
export class AppComponent  { name = 'Angular'; }
