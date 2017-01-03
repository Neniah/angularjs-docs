import { Component } from "angular2/core"
import { MoviesListComponent } from "./components/movies-list.component"
import { MoviesFooterComponent } from "./components/movies-footer.component"
import { ROUTER_DIRECTIVES, RouteConfig, Router } from "angular2/router";
import { ContactComponent } from "./components/contact.component"
import { AddMovieComponent } from "./components/add-movie.component"


@Component({
  selector: "my-app",
  templateUrl:"app/view/movies.html",
  directives: [MoviesListComponent,
    MoviesFooterComponent, ROUTER_DIRECTIVES,
    ContactComponent, AddMovieComponent],
})
@RouteConfig([
  {path: "/movies", name: "Movies", component: MoviesListComponent, useAsDefault: true},
  {path: "/contact", name: "Contact", component: ContactComponent},
  {path: "/add-movie", name: "AddMovie", component: AddMovieComponent},
  {path: "/add-movie/:title/:director/:year", name: "AddRemake", component: AddMovieComponent}
])
export class AppComponent{
  public title:string = "Movies on Angular 2";


}
