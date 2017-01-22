import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>
    Hello {{name}}</h1>
    <p>Email: {{email}}</p>
    `,
})
export class AppComponent  {
  name = 'Jane Doe';
  email = 'jane@email.com';
  address = {
    street: '12 Main St',
    city: 'Boston',
    state: 'MA'
  };

}
