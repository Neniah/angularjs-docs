import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `<h1>
    Hello {{name}}</h1>
    <p>Email: {{email}}</p>
    <p>{{address.street}} {{address.city}}, {{address.state}}</p>

    <button (click)="toggleHobbies()">Show Hobbies</button>
    <div *ngIf="showHobbies">
      <h3>Hobbies</h3>
      <ul>
        <li *ngFor="let hobby of hobbies">
          {{hobby}}
        </li>
      </ul>
    </div>
    `,
})
export class UserComponent  {
  name:string;
  email:string;
  address: address;
  hobbies: string[];
  showHobbies: boolean;

  constructor(){
    this.name = 'Jane Doe';
    this.email = 'jane@email.com';
    this.address = {
      street: '12 Main St',
      city: 'Boston',
      state: 'MA'
    }
    this.hobbies = ['Music', 'Movies', 'Sports'];
    this.showHobbies = false;
  }
  toggleHobbies(){
    console.log('show');
  }
}

interface address{
  street:string;
  city:string;
  state:string;
}
