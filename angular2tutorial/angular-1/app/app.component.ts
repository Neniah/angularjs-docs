import { Component } from "angular2/core"
import { MoviesListComponent } from "./components/movies-list.component"
import { MoviesFooterComponent } from "./components/movies-footer.component"

@Component({
  selector: "my-app",
  templateUrl:"app/view/movies.html",
  directives: [MoviesListComponent, MoviesFooterComponent],
})
export class AppComponent{
  public title:string = "Movies on Angular 2";


}
