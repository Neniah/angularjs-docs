import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `<h1>
    Hello {{name}}</h1>
    <p>Email: {{email}}</p>
    <p>{{address.street}} {{address.city}}, {{address.state}}</p>
    `,
})
export class UserComponent  {
  name:string;
  email:string;
  address: address;

  constructor(){
    this.name = 'Jane Doe';
    this.email = 'jane@email.com';
    this.address = {
      street: '12 Main St',
      city: 'Boston',
      state: 'MA'
    }
  }

}

interface address{
  street:string;
  city:string;
  state:string;
}
