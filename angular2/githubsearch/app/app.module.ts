import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { AppComponent }  from './app.component';
import { ProfileComponent } from './components/profile.component'

@NgModule({
  imports:      [ BrowserModule, HttpModule,
          ReactiveFormsModule, FormBuilder, FormControl, FormGroup  ],
  declarations: [ AppComponent, ProfileComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
