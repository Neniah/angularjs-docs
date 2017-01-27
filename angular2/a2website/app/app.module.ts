import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { JumbotronComponent } from './component/jumbotron/jumbotron.component';
import { HomeComponent } from './component/pages/home.component';
import { AboutComponent } from './component/pages/about.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, NavbarComponent, JumbotronComponent,
                    AboutComponent, HomeComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
