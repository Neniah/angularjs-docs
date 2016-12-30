import { Component } from "angular2/core"
import { MoviesListComponent } from "./components/movies-list.component"
import { MoviesFooterComponent } from "./components/movies-footer.component"
import { ROUTER_DIRECTIVES, RouteConfig, Router } from "angular2/router";

@Component({
  selector: "my-app",
  templateUrl:"app/view/movies.html",
  directives: [MoviesListComponent, MoviesFooterComponent, ROUTER_DIRECTIVES],
})
@RouteConfig([
  {path: "/movies", name: "Movies", component: MoviesListComponent, useAsDefault: true}
])
export class AppComponent{
  public title:string = "Movies on Angular 2";


}
