import { Component } from "angular2/core"
import { MoviesListComponent } from "./components/movies-list.component"

@Component({
  selector: "my-app",
  templateUrl:"app/view/movies.html",
  directives: [MoviesListComponent],
  styleUrls: ["../assets/css/styles.css"]
})
export class AppComponent{
  public title:string = "Movies on Angular 2";


}
